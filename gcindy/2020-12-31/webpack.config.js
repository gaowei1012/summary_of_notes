const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 指定webpack编译模式
  // 入口
  entry: "./src/index.js",
  // 输出
  output: {
    filename: "[name].bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出路径
  },
  optimization: {
    // 代码分离
    runtimeChunk: "single",
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), // new webpack内置插件
    new HtmlWebpackPlugin({ template: "./index.html" }), // html 入口文件
  ],
};
