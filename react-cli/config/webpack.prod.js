const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require("path");
const glob = require('glob-all')
const purifyCssWebpack = require('purifycss-webpack')

module.exports = merge(base, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../'),
		}),
		new OptimizeCssAssetsWebpackPlugin({
			cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                // 去掉注释
                preset: ["default", { discardComments: { removeAll: true } }]
            },
		}),
		new purifyCssWebpack({
            paths: glob.sync([
                path.resolve(__dirname, '../src/*html'),
                path.resolve(__dirname, '../src/*js')
            ])
        }),
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
