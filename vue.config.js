module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/variables.scss";'
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('svg-url-loader')
      .loader('svg-url-loader')
      .end()
      .end()
      .oneOf('external')
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
