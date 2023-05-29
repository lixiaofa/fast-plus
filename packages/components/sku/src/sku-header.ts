/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 17:13:51
 * @LastEditTime: 2023-05-21 17:50:27
 * @LastEditors: 司马老贼
 */
import { buildProps, mutable } from '@element-plus/utils'
// import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPropTypes, PropType } from 'vue'
import type SkuHeader from './sku-header.vue'
export type Images = Record<string, string>
export interface Goods {
  title: string
  picture: string
  priceTag?: [number, string]
}

export const skuHeaderProps = buildProps({
  goods: {
    type: Object as PropType<Goods>,
    default: () => mutable({} as const),
  },
  showHeaderImage: {
    type: Boolean,
    default: true,
  },
} as const)

export type SkuHeaderProps = ExtractPropTypes<typeof skuHeaderProps>
export const skuHeaderEmits = {
  previewImage: () => true,
}
export type SkuHeaderInstance = InstanceType<typeof SkuHeader>
