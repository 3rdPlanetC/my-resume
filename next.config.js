const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
module.exports = withFonts(withLess({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // lessLoaderOptions: {
    //     javascriptEnabled: true,
    // },
    // webpack: config => {
    //     config.module.rules.push({
    //         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //         use: {
    //             loader: 'url-loader',
    //             options: {
    //                 limit: 100000,
    //                 name: '[name].[ext]'
    //             }
    //         }
    //     }),
    //     config.module.rules.push({
    //         test: /\.css$/i,

    //     })
    //     return config
    // }
}))