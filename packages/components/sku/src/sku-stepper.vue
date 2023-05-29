<template>
  <div :class="ns.b()">
    <div :class="ns.e('label')">购买数量</div>
    <div :class="ns.e('wrapper')">
      <span :class="ns.m('quota')" v-html="quotaText" />
      <Stepper
        v-model="num"
        :min="min"
        :max="max"
        :disable-input="disableStepperInput"
        @overlimit="onOverLimit"
        @change="$emit('selectedNum', num)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Stepper } from 'vant'
import { useNamespace } from '@element-plus/hooks'
import 'vant/es/stepper/style'

import { skuStepperEmits, skuStepperProps } from './sku-stepper'
import { useSkuStepper } from './use-sku-stepper'

defineOptions({
  name: 'ElSkuStepper',
})

const ns = useNamespace('sku-stepper')
const props = defineProps(skuStepperProps)

defineEmits(skuStepperEmits)

const { num, min, max, quotaText, onOverLimit } = useSkuStepper(props)
</script>
