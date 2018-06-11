export default {
  devtool: 'source-map',
  mode: 'production',
  target: 'electron-renderer',
  entry: './electron/client/index',
  output: {
    path: __dirname,
    filename: './electron/client/client.prod.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
}