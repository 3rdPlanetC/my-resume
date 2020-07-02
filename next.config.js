const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
module.exports = withFonts(withCSS(withLess({
    // cssLoaderOptions: {
    //     importLoaders: 1,
    //     localIdentName: "[local]___[hash:base64:5]",
    // },
    cssModules: true
    // webpack: function (config) {
    //     config.module.rules.push({
    //         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //         use: {
    //             loader: 'url-loader',
    //             options: {
    //                 limit: 100000,
    //                 name: '[name].[ext]'
    //             }
    //         }
    //     })
    //     return config
    // }
})))