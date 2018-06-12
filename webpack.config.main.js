import webpack from 'webpack';

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


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
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.NamedModulesPlugin(),
    // new UglifyJSPlugin({
    //   parallel: true,
    //   sourceMap: true
    // })
  ]
}