<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-13 18:19:57
 * @LastEditTime: 2023-03-13 18:21:52
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
  name: 'ElSkuRowItem',
})
const ns = useNamespace('sku-row-item')
</script>
