const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
module.exports = withFonts(withLess({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    
}))