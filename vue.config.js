var path = require('path')
const env = process.env.NODE_ENV

let targets = {
  'production': '',
  'development': 'http://t.experiment.train.joyread.com.cn',
}

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: targets[env],
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    historyApiFallback: {
      index: '/index.html'
    }
  }
}