/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-05-31 12:07:16
 * @LastEditTime: 2023-06-16 18:14:30
 * @LastEditors: 司马老贼
 */
import { config, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ID_INJECTION_KEY, useId, useIdInjection } from '../use-id'

describe('no injection value', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('useIdInjection', () => {
    const wrapper = mount({
      setup() {
        const idInjection = useIdInjection()
        return idInjection
      },
      template: '<div></div>',
    })

    expect(wrapper.vm.prefix).toMatch(/^\d{0,4}$/)
    expect(wrapper.vm.current).toBe(0)
  })

  it('useId', () => {
    const wrapper = mount({
      setup() {
        const id = useId()
        return { id }
      },
    })

    expect(wrapper.vm.id).toMatch(/^fs-id-\d{0,4}-\d+$/)
  })
})

describe('with injection value', () => {
  beforeEach(() => {
    config.global.provide = {
      [ID_INJECTION_KEY as symbol]: {
        prefix: 1024,
        current: 0,
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  it('useIdInjection', () => {
    const wrapper = mount({
      setup() {
        const idInjection = useIdInjection()
        return idInjection
      },
    })

    expect(wrapper.vm.prefix).toBe(1024)
    expect(wrapper.vm.current).toBe(0)
  })

  it('useId', () => {
    const wrapper = mount({
      setup() {
        const id = useId()
        return { id }
      },
    })

    expect(wrapper.vm.id).toBe('fs-id-1024-0')
  })
})
