
var path = require('path')
var px2rem = require('postcss-px2rem')

var postcss = px2rem({
  remUnit: 40,
  remPrecision: 8
})

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('com*', resolve('./src/components'))
      .set('assets*', resolve('./src/assets'))
      .set('api', resolve('./src/api'))
  },
  css: {
    loaderOptions: {
      css: {
        modules: true,
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}