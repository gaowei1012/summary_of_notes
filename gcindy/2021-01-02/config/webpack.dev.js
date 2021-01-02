const merge = require("webpack-merge"); // 合并多个文件
const base = require("./webpack.base");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true, //启用压缩 (.gzip)
    port: 8080, //端口
    open: true, //自动打开浏览器
    hot: true, // 热更新
  }, 
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
