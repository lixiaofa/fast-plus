import { defineComponent, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useLocale } from '@fast-plus/hooks'
import Chinese from '@fast-plus/locale/lang/zh-cn'
import English from '@fast-plus/locale/lang/en'

import {
  useGlobalComponentSettings,
  useGlobalConfig,
} from '../src/hooks/use-global-config'
import ConfigProvider from '../src/config-provider'

import type { PropType } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type { Language } from '@fast-plus/locale'
import type { ComponentSize } from '@fast-plus/constants'
import type { ConfigProviderProps } from '../src/config-provider-props'

const TestComp = defineComponent({
  setup() {
    const { t } = useLocale()
    return () => <div>{t('el.popconfirm.confirmButtonText')}</div>
  },
})

describe('config-provider', () => {
  describe('locale-provider', () => {
    let wrapper: VueWrapper<any>

    beforeEach(() => {
      const currentLocale = ref<Language>(English)
      const oppositeLocale = ref<Language>(Chinese)
      const toEn = () => {
        currentLocale.value = English
        oppositeLocale.value = Chinese
      }
      const toZh = () => {
        currentLocale.value = Chinese
        oppositeLocale.value = English
      }

      wrapper = mount(() => (
        <>
          <ConfigProvider locale={currentLocale.value}>
            <TestComp class="current-locale" />
            <ConfigProvider locale={oppositeLocale.value}>
              <TestComp class="opposite-locale" />
            </ConfigProvider>
          </ConfigProvider>

          <button onClick={toEn} class="to-en">
            toEn
          </button>
          <button onClick={toZh} class="to-zh">
            toZh
          </button>
        </>
      ))
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
    })
  })

  describe('feature checking', () => {
    const TestComponent = defineComponent({
      props: {
        configKey: {
          type: String as PropType<keyof ConfigProviderProps>,
          required: true,
        },
      },
      setup(props) {
        const features = useGlobalConfig(props.configKey)
        return {
          [props.configKey]: features,
        }
      },
      render: () => <div />,
    })

    it.each([
      { feature: 'a11y', config: false },
      { feature: 'keyboardNavigation', config: false },
      { feature: 'experimentalFeatures', config: { someFeature: true } },
    ])(
      'should inject config $feature to $config correctly',
      ({ feature, config }: { feature: string; config: any }) => {
        const props: Record<string, any> = {}
        props[feature] = config

        const wrapper = mount(() => (
          <ConfigProvider {...props}>
            <TestComponent configKey={feature as keyof ConfigProviderProps} />
          </ConfigProvider>
        ))

        expect(wrapper.findComponent(TestComponent).vm[feature]).toEqual(config)
      }
    )
  })

  describe('global component configs', () => {
    it('should use global configured settings', async () => {
      const namespace = 'test'
      const locale = Chinese
      const zIndex = 1000
      const block = 'button'
      const size = 'large'
      const receiverRef = ref()
      const fallback = ref('' as ComponentSize)
      const ReceiverComponent = defineComponent({
        setup() {
          receiverRef.value = useGlobalComponentSettings(block, fallback)
        },
        template: '<div></div>',
      })
      mount(() => (
        <ConfigProvider
          zIndex={zIndex}
          locale={locale}
          namespace={namespace}
          size={size}
        >
          <ReceiverComponent />
        </ConfigProvider>
      ))

      const vm = receiverRef.value
      expect(vm.ns.namespace).toBe(namespace)
      expect(vm.locale.locale).toBe(locale)
      expect(vm.zIndex.currentZIndex).toBeGreaterThanOrEqual(zIndex)
      expect(vm.size).toBe(size)

      fallback.value = 'small'
      await nextTick()

      expect(vm.size).toBe('small')
    })
  })
})
