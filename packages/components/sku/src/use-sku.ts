/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-02 11:34:52
 * @LastEditTime: 2023-06-05 18:25:39
 * @LastEditors: 司马老贼
 */
import { computed, ref, watch } from 'vue'
import { showToast } from 'vant'
import { isEmpty } from '@fast-plus/utils'
import type { SetupContext } from 'vue'

import type {
  PropertiesItem,
  PropertiesVItem,
  SelectedPropertyMap,
  SelectedSkuMap,
  SkuData,
  SkuEmits,
  SkuItem,
  SkuProps,
  VItem,
} from './sku'

import 'vant/es/toast/style'

const TRUE = true
const FALSE = false

export const useSku = (
  props: SkuProps,
  emit: SetupContext<SkuEmits>['emit']
) => {
  const visible = ref(false)
  const selectedNum = ref(1)

  const selectedSkuMap = ref<SelectedSkuMap>({})
  const selectedPropertyMap = ref<SelectedPropertyMap>({})
  const isNoNecessary = ref<string[]>([])

  watch(
    () => props.modelValue,
    (value) => {
      if (value) visible.value = value
    }
  )
  const getImages = (sku: SkuData) => {
    const images: string[] = []
    sku.tree.forEach((treeItem) => {
      if (!treeItem.v) return

      treeItem.v.forEach((vItem) => {
        const img = vItem.imgUrl
        img && images.push(img)
      })
    })
    return images
  }
  const images = ref(getImages(props.sku))
  const hasSkuOrAttr = computed(
    () => !props.sku.none_sku ?? props.properties.length > 0
  )
  const selectedListItem = computed(() => {
    //筛选出 符合的list
    const keys = Object.keys(selectedSkuMap.value)

    const selectedListItem = props.sku.list.find((item) =>
      keys.every((key) => selectedSkuMap.value[key]?.id === item[key])
    )

    return selectedListItem
  })
  const price = computed(() => {
    const selectedPropertyPrice = Object.values(selectedPropertyMap.value)
      .flat()
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      )

    let selectedPrice
    if (selectedListItem.value) {
      selectedPrice = (
        (selectedListItem.value.price + selectedPropertyPrice) /
        100
      ).toFixed(2)
    }
    return selectedPrice ?? props.sku.price
  })
  const stock = computed(() => {
    return selectedListItem.value?.stock_num ?? props.sku.stock_num
  })
  const stockText = computed(() => {
    return `剩余<span>
    ${stock.value}
  </span>件`
  })

  const getUnselectedKeys = (items: (SkuItem | PropertiesItem)[]) => {
    return items
      .filter((item) => !item.v.some((vItem) => vItem.active === TRUE))
      .map((item) => item.k)
  }

  const reSelectedText = () => {
    const unselectedSku = getUnselectedKeys(props.sku.tree)

    const unSelectedProperties = getUnselectedKeys(props.properties)

    return `请选择 ${unselectedSku.concat(unSelectedProperties).join(' ')}`
  }

  const nowSelectedPropertyMap = computed(() => {
    const res: SelectedPropertyMap = {}
    for (const key in selectedPropertyMap.value) {
      if (
        !(
          isNoNecessary.value.includes(key) &&
          isEmpty(selectedPropertyMap.value[key])
        )
      )
        res[key] = selectedPropertyMap.value[key]
    }

    return res
  })

  const selectedText = computed(() => {
    const skuVal = Object.values(selectedSkuMap.value).map((item) => item?.name)

    const propertyVal = Object.values(nowSelectedPropertyMap.value).map(
      (item) => item.map((vItem) => vItem.name)
    )

    const hasNoSelectedSku = skuVal.some((item) => isEmpty(item))
    const hasNoSelectedProperty = propertyVal.some((item) => isEmpty(item))

    if (!hasNoSelectedSku && !hasNoSelectedProperty)
      return `已选择 ${skuVal.concat(propertyVal.flat()).join(' ')}`

    return reSelectedText()
  })

  const selectedSku = (selectedPreItem: SkuItem, selectedItem: VItem) => {
    props.sku.tree.forEach((item) => {
      if (item.v.includes(selectedItem)) {
        item.v.forEach((vitem) => {
          if (selectedItem !== vitem) vitem.active = FALSE
        })
      }
    })

    selectedItem.active = !selectedItem.active

    if (selectedItem.active) {
      selectedSkuMap.value[selectedPreItem.k_s] = selectedItem
    } else {
      selectedSkuMap.value[selectedPreItem.k_s] = null
    }
    // 筛选出有的list
    const hasList = props.sku.list.filter(
      (item) => item[selectedPreItem.k_s] === selectedItem.id
    )
    //筛选出没有被选的sku
    const noSelectedSku = props.sku.tree.filter(
      (item) => item.k_s !== selectedPreItem.k_s
    )
    noSelectedSku.forEach((item) => {
      const hasVItem = hasList.map((vItem) => vItem[item.k_s])

      if (!isEmpty(hasVItem)) {
        item.v.forEach((vItem) => {
          vItem.disabled = FALSE
          if (!hasVItem.includes(vItem.id)) vItem.disabled = TRUE
        })
      }
    })
  }
  const selectedProperties = (
    selectedPrePropertiesItem: PropertiesItem,
    selectedPropertiesItem: PropertiesVItem
  ) => {
    selectedPropertiesItem.active = !selectedPropertiesItem.active
    const selectedArr = selectedPropertyMap.value[selectedPrePropertiesItem.k]

    if (selectedPropertiesItem.active) {
      selectedArr.push(selectedPropertiesItem)
    } else {
      const index = selectedArr.indexOf(selectedPropertiesItem)

      selectedArr.splice(index, 1)
    }
  }
  const resetSelected = () => {
    emit('update:modelValue', false)
    props.sku.tree.forEach((item) => {
      selectedSkuMap.value[item.k_s] = null
      item.v.forEach((vitem) => {
        vitem.active = FALSE
        vitem.disabled = FALSE
      })
    })

    props.properties.forEach((item) => {
      const noPrice = item.v.some((vItem) => vItem.price === 0)
      if (item.is_necessary === false && !noPrice)
        isNoNecessary.value.push(item.k)
      selectedPropertyMap.value[item.k] = []

      item.v.forEach((vItem) => {
        vItem.active = FALSE
      })
      if (noPrice) {
        const firstEnableProperty = item.v.find(
          (vItem) => vItem.text_status !== 0
        )

        if (firstEnableProperty) {
          firstEnableProperty.active = TRUE

          selectedPropertyMap.value[item.k].push(firstEnableProperty)
        }
      }
    })
  }

  const validateSku = () => {
    for (const ind in selectedSkuMap.value) {
      if (isEmpty(selectedSkuMap.value[ind])) return false
    }
    return true
  }
  const validateProperty = () => {
    for (const ind in selectedPropertyMap.value) {
      if (
        isEmpty(selectedPropertyMap.value[ind]) &&
        !isNoNecessary.value.includes(ind)
      )
        return false
    }
    return true
  }

  const validate = () => {
    if (!validateSku()) return false
    if (!validateProperty()) return false
    return true
  }

  const buyOrAddCartValidate = () => {
    const err = validate()

    if (!err) {
      showToast('请选择XXX')

      return false
    }

    return true
  }
  const onSelectedNum = (num: number) => {
    selectedNum.value = num
  }

  const getSkuData = computed(() => ({
    goodsId: props.goodsId,
    selectedNum: selectedNum.value,
    sku: selectedSkuMap.value,
    properties: selectedPropertyMap.value,
  }))
  const buyOrAddCartEmit = (action: any) =>
    buyOrAddCartValidate() && emit(action, getSkuData.value)
  const addCart = () => {
    buyOrAddCartEmit('addCart')
  }

  const buy = () => {
    buyOrAddCartEmit('buy')
  }

  return {
    visible,
    images,
    hasSkuOrAttr,
    stock,
    stockText,
    selectedText,
    price,
    selectedSku,
    selectedProperties,
    resetSelected,
    onSelectedNum,
    addCart,
    buy,
  }
}
