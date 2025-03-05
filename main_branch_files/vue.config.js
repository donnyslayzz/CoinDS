const path = require('path');

module.exports = {
  publicPath: '/CoinDS/',  // Set the base public path for GitHub Pages
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),  // Creates an alias for the 'src' directory
      }
    }
  }
};
