<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 11:59:55
 * @LastEditTime: 2023-06-26 18:19:35
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <Image
      v-if="showHeaderImage"
      radius="4px"
      width="96px"
      height="96px"
      fit="cover"
      :src="goods.picture"
      @click="$emit('previewImage')"
    />
    <div :class="ns.e('wrapper')">
      <slot name="sku-header-price" />

      <slot />
    </div>
  </div>
  <Divider />
</template>

<script lang="ts" setup>
import { Divider, Image } from 'vant'
import { useNamespace } from '@fast-plus/hooks'
import { skuHeaderEmits, skuHeaderProps } from './sku-header'
import 'vant/es/image/style'
import 'vant/es/divider/style'

defineOptions({
  name: 'FSSkuHeader',
})

const ns = useNamespace('sku-header')

defineProps(skuHeaderProps)
defineEmits(skuHeaderEmits)
</script>
