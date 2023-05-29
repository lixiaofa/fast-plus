<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:10:47
 * @LastEditTime: 2023-05-29 09:59:45
 * @LastEditors: 司马老贼
-->

<template>
  <Popup
    v-model:show="visible"
    :class="ns.b()"
    round
    closeable
    position="bottom"
    teleport="body"
    @close="close"
  >
    <SkuHeader
      :goods="goods"
      :show-header-image="showHeaderImage"
      @preview-image="previewImage"
    >
      <template #sku-header-price>
        <div :class="ns.be('header', 'price')">
          <span :class="ns.e('symbol')">￥</span>
          <span :class="ns.e('num')">{{ price }}</span>
          <span v-if="priceTag" :class="ns.e('price-tag')">
            {{ priceTag }}
          </span>
        </div>
        <SkuHeaderItem v-if="!hideStock">
          <span :class="ns.e('stock')" v-html="stockText" />
        </SkuHeaderItem>
        <SkuHeaderItem>
          {{ selectedText }}
        </SkuHeaderItem>
      </template>
    </SkuHeader>
    <div v-if="hasSkuOrAttr" :class="ns.be('body', 'wrapper')">
      <SkuRow v-for="item in sku.tree" :key="item.k_id" :row="item">
        <SkuRowItem
          v-for="rowItem in item.v"
          :key="rowItem.id"
          :class="{ 'el-sku--active': rowItem.active }"
          @click="selectedSku(item, rowItem)"
        >
          <Image
            v-if="rowItem.imgUrl"
            :class="ns.e('img')"
            fit="cover"
            :src="rowItem.imgUrl"
            width="24"
            height="24"
          />
          <div :class="[ns.e('name'), rowItem.disabled && ns.m('disabled')]">
            {{ rowItem.name }}
          </div>
        </SkuRowItem>
      </SkuRow>
      <SkuRow v-for="item in properties" :key="item.k_id" :row="item">
        <SkuRowItem
          v-for="rowItem in item.v"
          :key="rowItem.id"
          :class="{ 'el-sku--active': rowItem.active }"
          @click="selectedProperties(item, rowItem)"
        >
          <div
            :class="[
              ns.e('name'),
              rowItem.text_status === 0 && ns.m('disabled'),
            ]"
          >
            {{ rowItem.name }}
          </div>
        </SkuRowItem>
      </SkuRow>

      <SkuStepper
        :quota="quota"
        :quota-used="quotaUsed"
        :start-sale-num="startSaleNum"
        :stock="stock"
        disable-stepper-input
        @selected-num="onSelectedNum"
      />
    </div>
    <SkuActions @add-cart="addCart" @buy="buy" />
  </Popup>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { Image, Popup, showImagePreview } from 'vant'
import { useNamespace } from '@element-plus/hooks'
import { skuEmits, skuProps } from './sku'
import 'vant/es/popup/style'
import 'vant/es/image-preview/style'

import 'vant/es/lazyload/style'

import SkuHeader from './sku-header.vue'
import SkuHeaderItem from './sku-header-item.vue'
import SkuRow from './sku-row.vue'
import SkuRowItem from './sku-row-item.vue'
import SkuStepper from './sku-stepper.vue'
import SkuActions from './sku-actions.vue'
import { useSku } from './use-sku'

defineOptions({
  name: 'ElSku',
})
const ns = useNamespace('sku')

const props = defineProps(skuProps)

const emit = defineEmits(skuEmits)

const {
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
} = useSku(props, emit)

onBeforeMount(() => {
  resetSelected()
})

const previewImage = () => {
  showImagePreview({
    images: images.value,
  })
}

const close = () => {
  resetSelected()
}
</script>
