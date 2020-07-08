const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts')
module.exports = withFonts(withLess({
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        }),
        config.module.rules.push({
            test: /\.css$/i,

        }),
        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        }
        return config
    }
}))