// import { provideGlobalConfig } from '@fast-plus/components/config-provider'
import { INSTALLED_KEY } from '@fast-plus/constants'
import { version } from './version'

import type { App, Plugin } from '@vue/runtime-core'
// import type { ConfigProviderContext } from '@fast-plus/components/config-provider'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    // if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
