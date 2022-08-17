const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  //publicPath: isProd ? '/' : '/',
  publicPath: isProd ? '/my-blog' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false, 
}
