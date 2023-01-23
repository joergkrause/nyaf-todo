import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';

import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index.js',
  output: {
    file: 'public/index.js',
    format: 'iife',
    name: 'bundle',
    format: 'cjs'
  },
  plugins: [
    postcss({
      plugins: []
    }),
    image(),
    resolve({
      extensions
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "bundled"
    })
  ],
};
