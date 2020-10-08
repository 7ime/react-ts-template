const merge = require('webpack-merge');

const commonConfig = require('./common.config');
const paths = require('./tools/paths');
const plugins = require('./tools/plugins');

const mode = 'production'
process.env.NODE_ENV = mode;

module.exports = function (webpackEnv, argv) {
    return merge(commonConfig, {
        bail: true,
        mode,
        output: {
            filename: '[name].[contenthash:8].bundle.js',
            chunkFilename: '[name].[contenthash:8].bundle.js',
        },
        plugins: [
            plugins.cleanWebpackPlugin(),
            plugins.htmlWebpackPlugin( {
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                }
            })
        ],
        optimization: {
            minimize: true,
            minimizer: [
                plugins.terserPlugin(),
                plugins.optimizeCSSAssetsPlugin()
            ],
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: false
        }
    })
}
