import * as esbuild from 'esbuild';
import Common from './common.js';

const ctx = await esbuild.context({
  ...Common,
  outdir: 'www/build',
});

ctx.serve({
  servedir: 'www',
  port: 5000,
});
