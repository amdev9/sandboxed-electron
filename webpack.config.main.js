import webpack from 'webpack';
 
import { dependencies as externals } from './package.json';

// Find all the dependencies without a `main` property and add them as webpack externals
function filterDepWithoutEntryPoints(dep) {
  // Return true if we want to add a dependency to externals
  try {
    // If the root of the dependency has an index.js, return true
    if (fs.existsSync(path.join(__dirname, `node_modules/${dep}/index.js`))) {
      return false;
    }
    const pgkString = fs
      .readFileSync(path.join(__dirname, `node_modules/${dep}/package.json`))
      .toString();
    const pkg = JSON.parse(pgkString);
    const fields = ['main', 'module', 'jsnext:main', 'browser'];
    return !fields.some(field => field in pkg);
  } catch (e) {
    console.log(e);
    return true;
  }
}
 
export default {
  devtool: 'source-map',
  mode: 'production',
  target: 'electron-main',
  entry: './electron/main/index',
  output: {
    path: __dirname,
    filename: './electron/main/main.prod.js'
  },
  
  // externals: [
  //   ...Object.keys(externals || {})
  //   //.filter(filterDepWithoutEntryPoints)
  // ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [__dirname, 'node_modules']
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
    new webpack.NamedModulesPlugin()
  ]
}