/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 17:13:51
 * @LastEditTime: 2023-05-21 17:53:04
 * @LastEditors: 司马老贼
 */
import { buildProps } from '@fast-plus/utils'
// import { UPDATE_MODEL_EVENT } from '@fast-plus/constants'

import type { ExtractPropTypes, PropType } from 'vue'
import type { PropertiesItem, SkuItem } from './sku'
import type SkuRow from './sku-row.vue'

export const skuRowProps = buildProps({
  row: {
    type: Object as PropType<SkuItem | PropertiesItem>,
    default: {},
  },
} as const)

export type SkuRowProps = ExtractPropTypes<typeof skuRowProps>

export type SkuRowInstance = InstanceType<typeof SkuRow>
