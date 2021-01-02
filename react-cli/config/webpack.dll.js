const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: "[name].dll.js",
        library: 'react'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dll', '[name]-manifest.json'),
            name: 'react'
        })
    ]
}
