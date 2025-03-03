module.exports = {
  transpileDependencies: true,
  publicPath: "/coinds-web/", // ✅ Required for GitHub Pages
  css: {
    extract: true, // ✅ Forces Vue to generate a separate CSS file
    sourceMap: true
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all" // ✅ Ensures CSS gets extracted correctly
      }
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js"
      }
    }
  }
};
