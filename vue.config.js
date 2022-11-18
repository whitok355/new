const path = require('path');

module.exports = {
  publicPath: '/pet',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/style/_variables.scss')
      ]
    }
  },
  configureWebpack:{
    resolve:{
      alias: {
        Icons: path.resolve(__dirname, 'src/components/icons'),
        Elements: path.resolve(__dirname, 'src/components/elements'),
        Components: path.resolve(__dirname, 'src/components'),
        Views: path.resolve(__dirname, 'src/views'),
        img: path.resolve(__dirname, './src/assets')
      }
    }
  }
}
