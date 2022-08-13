const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/my-blog' : '/',
  outputPath: 'docs',
  filenameHashing: false,
  productionSourceMap: false, 
}
