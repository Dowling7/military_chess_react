module.exports = {
    chainWebpack: config => {
      config.module.rule('scss').oneOf('vue').use('sass-loader').loader('sass-loader').options({
        implementation: require('sass')
      });
    }
  };
  