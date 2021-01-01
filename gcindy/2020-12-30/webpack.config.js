const path = require("path");

module.exports = {
  mode: "development", // 指定webpack编译模式
  // 入口
  entry: "./src/main.js",
  // 输出
  output: {
    filename: "[name].bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出路径
  },
  optimization: {
    // 代码分离
    runtimeChunk: "single",
  },
};
