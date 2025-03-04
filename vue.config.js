module.exports = {
  transpileDependencies: true,
  publicPath: "/CoinDS/", // ✅ Use repo name here to match GitHub Pages URL
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js"
      }
    }
  }
};
