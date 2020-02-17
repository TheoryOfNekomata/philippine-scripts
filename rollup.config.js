import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

export default {
  input: './lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: './docs/js/bundle.js',
      format: 'iife',
      name: 'philippineScripts',
    },
  ],
  plugins: [
    commonjs(),
  ],
}
