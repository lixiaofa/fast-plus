<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-13 09:24:50
 * @LastEditTime: 2023-05-25 12:19:06
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <div :class="ns.e('label')">
      {{ row.k }}
      <span v-if="isPropertiesItem(row)" :class="ns.m('multiple')">
        (可多选)</span
      >
    </div>
    <slot />
  </div>
  <Divider />
</template>

<script lang="ts" setup>
import { Divider } from 'vant'
import { useNamespace } from '@fast-plus/hooks'
import { skuRowProps } from './sku-row'

import 'vant/es/Divider/style'

defineOptions({
  name: 'FSSkuRow',
})
const ns = useNamespace('sku-row')

defineProps(skuRowProps)

const isPropertiesItem = (row: any) => !!row?.is_multiple
</script>
