const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
const path = require("path");
const options = require('./options')

module.exports = merge(base ,{
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../'),
        }),
        /// 生成 manifest.json 文件，用于后面的 DllPlugin 代码拆分
        new WebpackManifestPlugin(options)
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
})
