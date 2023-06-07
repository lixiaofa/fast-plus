import { componentSizeMap } from '@fast-plus/constants'

import type { ComponentSize } from '@fast-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
