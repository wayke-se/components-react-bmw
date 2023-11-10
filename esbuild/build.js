console.log('Build started');
console.time('Build time');

import * as esbuild from 'esbuild';
import { copy } from 'esbuild-plugin-copy';
import Common from './common.js';

const ConfigProd = {
    ...Common,
    format: 'esm',
    minify: true,
    plugins: [
        copy({
          resolveFrom: 'cwd',
          assets: {
            from: ['./www/index.html'],
            to: ['./dist/index.html'],
          },
          watch: true,
        }),
      ],
}


const ctx = esbuild.build(ConfigProd);
await ctx;
console.timeEnd('Build time');
