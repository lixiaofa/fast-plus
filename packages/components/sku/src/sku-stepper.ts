/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 17:13:51
 * @LastEditTime: 2023-05-21 17:55:16
 * @LastEditors: 司马老贼
 */
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

import type SkuStepper from './sku-stepper.vue'

export const skuStepperProps = buildProps({
  quota: {
    type: Number,
    default: 0,
  },
  quotaUsed: {
    type: Number,
    default: 0,
  },
  startSaleNum: {
    type: Number,
    default: 1,
  },
  stock: Number,
  disableStepperInput: Boolean,
} as const)

export type SkuStepperProps = ExtractPropTypes<typeof skuStepperProps>
export const skuStepperEmits = {
  selectedNum: (num: number) => typeof num === 'number',
}
export type SkuStepperEmits = typeof skuStepperEmits

export type SkuStepperInstance = InstanceType<typeof SkuStepper>
