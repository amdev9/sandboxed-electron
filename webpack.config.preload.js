import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
 
// browserify -x electron preload.js > preload.brow.js
// browserify preload.js -x electron -x electron-redux --insert-global-vars=__filename,__dirname -o preload.prod.js 

export default {
  mode: 'production',
  target: "electron-renderer",
  // node: {
  //   fs: 'empty'
  // },
  entry: {
    app: "./electron/dapps/preload.dev.js"
  },
  output: {
    path: __dirname,
    filename: "./electron/dapps/preload.js"
  },
  devtool: 'source-map',
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
    new UglifyJSPlugin({
      parallel: true,
    }),
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'production',
    //   DEBUG_PROD: 'false'
    // })
  ],

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
}
