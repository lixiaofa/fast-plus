import { defineBuildConfig } from 'unbuild'

const __defProp = Object.defineProperty
const __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true })

globalThis.__name = __name

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
