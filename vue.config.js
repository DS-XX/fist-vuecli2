const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: process.env.NODE_ENV !== "production" ? "" : "/modules/order/",
  outputDir: "dist",
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 4001,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/localhost": {
        // target: "https://mtxtest.weioutech.com:4438/",
        target: "https://test.glxytech.com:32443/",
        ws: true,
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
