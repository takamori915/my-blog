const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // netlify公開用
  //publicPath: isProd ? '/' : '/',
  // github公開用
  publicPath: isProd ? '/my-blog' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false, 
}
