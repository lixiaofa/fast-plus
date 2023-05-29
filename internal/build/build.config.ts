import { defineBuildConfig } from 'unbuild'

import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import vuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import { babel } from '@rollup/plugin-babel'

import css from 'rollup-plugin-css-only'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['vant'],

  hooks: {
    'rollup:options': function (_ctx, options) {
      if (Array.isArray(options.plugins)) {
        options.plugins.push(
          commonjs(),
          nodeResolve(),
          externals(),
          postcss({
            plugins: [],
          }),
          css(),
          vuePlugin(),
          babel({ exclude: '**/node_modules/**' })
        )
      }
    },
  },
})
