import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import Sku from '../src/sku.vue'

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
    const wrapper = mount(() => <Sku goodsId={'1'} modelValue={true} />, {
      global: {
        stubs: ['Popup'],
      },
    })

    await nextTick()
    console.log(wrapper.html())

    expect(wrapper.classes()).contain('fs-sku')
  })
})
