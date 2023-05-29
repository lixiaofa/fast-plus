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
import { useNamespace } from '@element-plus/hooks'
import 'vant/es/action-bar/style'
import 'vant/es/action-bar-button/style'

defineOptions({
  name: 'ElSkuActions',
})
const ns = useNamespace('sku-actions')

defineEmits(['addCart', 'buy'])
</script>
