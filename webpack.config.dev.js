const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
    open: true
  }
})

