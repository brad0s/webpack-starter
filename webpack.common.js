const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // devtool: 'source-map',
  entry: {
    main: './src/js/index.js',
    vendor: './src/js/vendor.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.scss$/i,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
};
