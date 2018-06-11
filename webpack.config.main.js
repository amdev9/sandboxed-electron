export default {
  devtool: 'source-map',
  mode: 'production',
  target: 'electron-main',
  entry: './electron/main/index',
  output: {
    path: __dirname,
    filename: './electron/main/main.prod.js'
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