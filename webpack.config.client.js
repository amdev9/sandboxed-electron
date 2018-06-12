import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

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
      },
      // Extract all .global.css to style.css as is
      {
        test: /\.global\.css$/,
        use: ExtractTextPlugin.extract({
          publicPath: './',
          use: {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          fallback: 'style-loader'
        })
      },
      // Pipe other styles through css modules and append to style.css
      {
        test: /^((?!\.global).)*\.css$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        })
      },
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css")
    // new UglifyJSPlugin({
    //   parallel: true,
    //   sourceMap: true
    // })
  ]
}