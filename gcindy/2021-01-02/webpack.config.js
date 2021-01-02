const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出路径
  },
  optimization: {
    // 代码分离
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }), // html 入口文件
    // 删除dist文件
    new CleanWebpackPlugin(),
  ],
};
