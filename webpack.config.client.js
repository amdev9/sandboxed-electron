export default {
    devtool: 'source-map',
    mode: 'production',
    target: 'electron-renderer',
    entry: './electron/client/index',
    output: {
      path: __dirname,
      filename: './electron/client/client.prod.js'
    },
}