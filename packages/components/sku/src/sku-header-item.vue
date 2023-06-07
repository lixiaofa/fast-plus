<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 11:59:55
 * @LastEditTime: 2023-06-01 10:52:38
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@fast-plus/hooks'

defineOptions({
  name: 'FSSkuHeaderItem',
})
const ns = useNamespace('sku-header-item')
</script>
