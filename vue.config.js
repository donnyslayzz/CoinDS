module.exports = {
  transpileDependencies: true,
  publicPath: "/coinds-web/", // ✅ Required for GitHub Pages to load assets correctly
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js"
      }
    }
  }
};
