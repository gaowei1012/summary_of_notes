const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname,'../src/index.js'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'../dist'),
    },
    resolve: {
        extensions: [ '.js', '.vue', '.scss', '.css'], //后缀名自动补全
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:'url-loader',
                
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },{
                test:/\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new VueLoaderPlugin(),
        new ProgressBarPlugin()
    ]
}
