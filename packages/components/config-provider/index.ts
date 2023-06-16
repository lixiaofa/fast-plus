import { withInstall } from '@fast-plus/utils'

import ConfigProvider from './src/config-provider'

export const FsConfigProvider = withInstall(ConfigProvider)
export default FsConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
