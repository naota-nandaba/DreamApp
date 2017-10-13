const path = require('path');
const webpack = require('webpack');

const APP = path.join(__dirname, 'public', 'js');
const BUILD = path.join(__dirname, 'public', 'js');

module.exports = {
  entry: path.join(APP, 'index.js'),
  output: {
    path: path.join(BUILD),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    publicPath: '/public/js',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    use: [
          {
            loader: 'url-loader',
            options: {
              //max bytes on any image
              limit: 200000
            }
          }
        ]
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
