/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-05-31 16:21:45
 * @LastEditTime: 2023-06-16 09:31:46
 * @LastEditors: 司马老贼
 */
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { rAF } from '@fast-plus/test-utils/tick'
import Sku from '../src/sku.vue'

const AXIOM = 'Rem is the best girl'

describe('Sku.vue', () => {
  it('render test', async () => {
    const wrapper = mount(() => <Sku modelValue={true}></Sku>)
    await nextTick()
    await rAF()
    await nextTick()
    expect(wrapper.find('.fs-sku-body__wrapper').text()).toEqual(AXIOM)
  })
})
