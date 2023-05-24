const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/styles/common/common.scss";'
      }
    }
  },
  // netlify公開用
  //publicPath: isProd ? '/' : '/',
  // github公開用
  publicPath: './',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false, 
}
