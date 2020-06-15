// const withPlugins = require('next-compose-plugins')
// const withLess = require('@zeit/next-less')
// const withFonts = require('next-fonts')

// module.exports = withPlugins(
//     [
//         [withLess, {
            // cssLoaderOptions: {
            //     importLoaders: 1,
            //     localIdentName: "[local]___[hash:base64:5]",
            // }
//         }],
//         [withFonts, {
//             enableSvg: true,
//             // webpack(config, options) {
//             //   return config;
//             // }
//         }]    
//     ],
//     {
        
//     }
// )

const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
module.exports = withFonts(withLess({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // devIndicators: {
    //     autoPrerender: true,
    // },
}))