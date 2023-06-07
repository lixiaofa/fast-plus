<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-05-31 16:21:45
 * @LastEditTime: 2023-06-01 10:52:53
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <ActionBar>
      <ActionBarButton
        type="warning"
        text="加入购物车"
        @click="$emit('addCart')"
      />
      <ActionBarButton type="danger" text="立即购买" @click="$emit('buy')" />
    </ActionBar>
  </div>
</template>

<script lang="ts" setup>
import { ActionBar, ActionBarButton } from 'vant'
import { useNamespace } from '@fast-plus/hooks'
import 'vant/es/action-bar/style'
import 'vant/es/action-bar-button/style'

defineOptions({
  name: 'FSSkuActions',
})
const ns = useNamespace('sku-actions')

defineEmits(['addCart', 'buy'])
</script>
