const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
const options = require('./options')

module.exports = {
    mode: 'development', /// 指定webpack编译模式
    devtool: 'inline-source-map', /// 指定是以哪种模式编译代码
    entry: './src/index.js', /// 文件入口
    output: {
        filename: '[name].bundle.js', /// 输出文件名
        path: path.resolve(__dirname, 'dist') /// 输出路劲
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            title: 'webpack app'
        }), /// 编译 html
        new CleanWebpackPlugin({
            dry: false, /// 是否开启删除文件
            verbose: true, /// 报告删除文件
            cleanStaleWebpackAssets: false, /// 当watch时，存在增量情况下，不删除 index.html 文件
            cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'], /// 构建完成时清理
        }), /// 清除 dist 目录
        new WebpackManifestPlugin(options)
    ]
}
