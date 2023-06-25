/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-05-31 16:21:45
 * @LastEditTime: 2023-06-25 09:10:39
 * @LastEditors: 司马老贼
 */

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import Sku from '../src/sku.vue'

const AXIOM = 'Rem is the best girl'

describe('Sku.vue', () => {
  beforeEach(() => {
    // create teleport target
    const el = document.createElement('body')

    document.body.appendChild(el)
  })
  afterEach(() => {
    // clean up
    document.body.innerHTML = ''
  })
  it('render test', async () => {
    const wrapper = mount(
      () => (
        <Sku goodsId={'1'} modelValue={true} addCart={'addCart'} buy={'buy'} />
      ),
      {
        global: {
          stubs: ['Popup'],
        },
      }
    )

    await nextTick()

    expect(wrapper.classes()).contain('fs-sku')
  })
  // it('emitted test', async () => {
  //   const wrapper = mount(() => (
  //     <Sku goodsId={'1'} modelValue={true} addCart={'addCart'} buy={'buy'} />
  //   ))

  //   const constance = wrapper.getComponent(Sku)
  //   await nextTick()
  //   console.log('constanceconstance', constance.emitted())
  //   // expect(popupTeleport.emitted()).toHaveProperty('addCart')
  //   // expect(popupTeleport.emitted().addCart).toHaveLength(1)
  //   // expect(popupTeleport.emitted()).toHaveProperty('buy')
  //   // expect(popupTeleport.emitted().buy).toHaveLength(1)
  // })
})
