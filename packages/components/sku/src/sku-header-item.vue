<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 11:59:55
 * @LastEditTime: 2023-03-13 19:30:51
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElSkuHeaderItem',
})
const ns = useNamespace('sku-header-item')
</script>
