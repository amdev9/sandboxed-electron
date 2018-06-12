import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { dependencies as possibleExternals } from './package.json';

// externals?
// Find all the dependencies without a `main` property and add them as webpack externals
// function filterDepWithoutEntryPoints(dep) {
//   // Return true if we want to add a dependency to externals
//   try {
//     // If the root of the dependency has an index.js, return true
//     if (fs.existsSync(path.join(__dirname, `node_modules/${dep}/index.js`))) {
//       return false;
//     }
//     const pgkString = fs
//       .readFileSync(path.join(__dirname, `node_modules/${dep}/package.json`))
//       .toString();
//     const pkg = JSON.parse(pgkString);
//     const fields = ['main', 'module', 'jsnext:main', 'browser'];
//     return !fields.some(field => field in pkg);
//   } catch (e) {
//     console.log(e);
//     return true;
//   }
// }

export default {
  devtool: 'source-map',
  mode: 'production',
  target: 'electron-renderer',
  entry: './electron/client/index',
  output: {
    path: __dirname,
    filename: './electron/client/client.prod.js'
  },
  // externals: [
  //   ...Object.keys(possibleExternals || {})
  // ],

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
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'production'
    // }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css")
    // new UglifyJSPlugin({
    //   parallel: true,
    //   sourceMap: true
    // })
  ]
}