const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common.js')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'distProd'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single',
    minimize: true
  }
})

