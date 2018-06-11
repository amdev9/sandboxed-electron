export default {
    devtool: 'source-map',
    mode: 'production',
    target: 'electron-main',
    entry: './electron/main/index',
    output: {
      path: __dirname,
      filename: './electron/main/main.prod.js'
    },
}