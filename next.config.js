const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
module.exports = withFonts(withLess(withCSS({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
})))