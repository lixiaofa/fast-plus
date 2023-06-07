/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:10:48
 * @LastEditTime: 2023-06-06 11:38:16
 * @LastEditors: 司马老贼
 */
import { buildProps, isBoolean, isObject, mutable } from '@fast-plus/utils'
import { UPDATE_MODEL_EVENT } from '@fast-plus/constants'

import type { ExtractPropTypes, PropType } from 'vue'
import type Sku from './sku.vue'
import type { Goods } from './sku-header'

export const UNSELECTED_SKU_VALUE_ID = ''

export interface VItem {
  id: string
  name: string
  active: boolean
  disabled: boolean
  imgUrl?: string
}
export interface SkuItem {
  k: string
  k_s: string
  k_id: string
  v: VItem[]
}
export type SelectedSkuMap = Record<string, VItem | null>

export type SelectedPropertyMap = Record<string, PropertiesVItem[]>

export interface BaseListItem {
  id: number
  price: number
  discount: number
  stock_num: number
}
export type ListsItem = BaseListItem & Record<string, any>
export interface SkuData {
  price: string
  stock_num: number
  none_sku: boolean
  hide_stock: boolean
  collection_id: number
  tree: SkuItem[]
  list: ListsItem[]
}
export interface PropertiesVItem {
  id: number
  name: string
  active: boolean
  price: number
  text_status?: number
}
export interface PropertiesItem {
  k: string
  k_id: number
  is_multiple: boolean
  is_necessary?: boolean
  v: PropertiesVItem[]
}
export interface SelectedData {
  goodsId: string
  selectedNum: number
  sku: SelectedSkuMap
  properties: SelectedPropertyMap
}

export const skuProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  showHeaderImage: {
    type: Boolean,
    default: true,
  },

  goodsId: {
    type: String,
    required: true,
  },
  priceTag: {
    type: String,
    default: '',
  },
  sku: {
    type: Object as PropType<SkuData>,
    default: () => mutable({} as const),
  },
  properties: {
    type: Array as PropType<PropertiesItem[]>,
    default: () => mutable([] as const),
  },
  goods: {
    type: Object as PropType<Goods>,
    default: () => mutable({} as const),
  },
  hideStock: {
    type: Boolean,
    default: false,
  },
  disableStepperInput: Boolean,
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
} as const)

export type SkuProps = ExtractPropTypes<typeof skuProps>
export const skuEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  addCart: (skuData: SelectedData) => isObject(skuData),
  buy: (skuData: SelectedData) => isObject(skuData),
}
export type SkuEmits = typeof skuEmits
export type SkuInstance = InstanceType<typeof Sku>
