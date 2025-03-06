module.exports = {
  publicPath: "/CoinDS/", 
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js"
      }
    }
  }
};
