const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './lib/front/index.tsx',
  devServer: {
    contentBase: '../dist',
    port: 1234
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: 'Newdit',
      template: path.join(__dirname, '../index.html')
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  }
};
