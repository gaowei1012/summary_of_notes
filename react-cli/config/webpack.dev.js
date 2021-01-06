const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path")
const webpack = require("webpack");
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true, //启用压缩
    port: 1230, //端口
    open: false, //自动打开浏览器
    hot: true,
    clientLogLevel: 'info',
    historyApiFallback: true, // 使用HTML5历史记录API时，index.html可能必须在该页面上放置页面来代替任何404响应。devServer.historyApiFallback通过将其设置为启用true
    // allowedHosts: {}, // 允许加入开发服务器
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({ /// dll
      manifest: path.resolve(__dirname, '../dll/react-manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/react.dll.js')
    })
  ],
});
