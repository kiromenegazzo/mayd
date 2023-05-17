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
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  minify: false,
                  displayName: true,
                },
              ],
            ],
          },
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            exportType: 'named'
          }
        },
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
