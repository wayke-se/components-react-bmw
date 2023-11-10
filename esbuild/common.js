const Common = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'dist/build',
    loader: {
      '.js': 'jsx',
      '.woff': 'file',
      '.woff2': 'file',
      '.ttf': 'file',
      '.eot': 'file',
      '.gif': 'file',
      '.svg': 'dataurl',
      '.png': 'dataurl',
    },
  };
  
  export default Common;
  