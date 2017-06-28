var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var context = path.resolve(__dirname, 'app');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

require('babel-core/register')({
    presets: ['es2015', 'react'],
});

var VENDOR_LIBS = ['react', 'react-dom', 'react-redux', 'redux',];

module.exports = {
  entry: {
        bundle: [
            'babel-polyfill', path.resolve(__dirname, 'app/index.js'),
        ],
        vendor: VENDOR_LIBS,
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'js'),
          use: {
              loader: 'babel-loader',
              query: {
                  plugins: [
                      'transform-react-jsx', ['react-css-modules', {
                          context,
                      }],
                  ],
              },
          },
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack
        .optimize
        .CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  resolve: {
        extensions: [
            '.js', '.jsx', '.css',
        ],
        modules: ['node_modules'],
    }
};