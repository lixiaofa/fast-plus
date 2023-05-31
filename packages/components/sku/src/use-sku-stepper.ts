import { computed, ref, watch } from 'vue'

import { showToast } from 'vant'
import 'vant/es/toast/style'
import type { SkuStepperProps } from './sku-stepper'

export const useSkuStepper = (props: SkuStepperProps) => {
  const min = computed(() => props.startSaleNum)

  const max = computed(() => props.quota || props.stock)
  const num = ref(1)
  watch(
    () => props.startSaleNum,
    (value) => {
      if (value) num.value = value
    }
  )

  const startSaleNum = computed(() => props.startSaleNum)
  const quota = computed(() => props.quota)
  const quotaText = computed(() => {
    const quotaText: string[] = []

    if (startSaleNum.value > 1) quotaText.push(`${startSaleNum.value}件起售`)
    if (quota.value > 0) quotaText.push(`限购${quota.value} 件`)

    return quotaText.length > 0 ? `(${quotaText.join(',')})` : ''
  })

  const overLimit = {
    minus: () => {
      if (startSaleNum.value > 1) {
        showToast(`${startSaleNum.value}件起售`)
      } else {
        showToast('至少选择一件')
      }
    },
    plus: () => {
      showToast(`限购${quota.value} 件`)
    },
  }
  const onOverLimit = (action: 'minus' | 'plus') => {
    overLimit[action]()
  }

  return {
    num,
    min,
    max,
    quotaText,
    onOverLimit,
  }
}
