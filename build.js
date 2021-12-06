const { filelocPlugin } = require('esbuild-plugin-fileloc')
require('esbuild').build({
  entryPoints: ['./src'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/out.js',
  plugins: [filelocPlugin()],
}).catch(() => process.exit(1))