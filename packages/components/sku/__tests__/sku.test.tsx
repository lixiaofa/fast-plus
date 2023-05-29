import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Sku from '../src/sku.vue'

const AXIOM = 'Rem is the best girl'

describe('Sku.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Sku>{AXIOM}</Sku>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
