const merge = require('webpack-merge');
const base = require("./webpack.base.js");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

module.exports = merge(base ,{
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../'),
        })
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
