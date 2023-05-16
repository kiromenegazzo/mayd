const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { srcPath, distPath, staticPath } = require('./paths');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'features': path.resolve(srcPath, 'features'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(staticPath, 'index.html'),
      favicon: path.resolve(staticPath, 'favicon.ico'),
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
