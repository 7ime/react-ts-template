const Webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const dotenv = require('dotenv')

const {resolvePath, isDevMode} = require('./helpers')
const paths = require('./paths')

const env = dotenv.config({
    path: 'sample.env'
}).parsed

if(!env) {
    throw new Error('File \'SAMPLE.env\' doesn\'t exist')
}

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
}, {})

const configForkTsCheckerWebpackPlugin = {
    tsconfig: resolvePath('tsconfig.json'),
    useTypescriptIncrementalApi: true,
    checkSyntacticErrors: true,
    formatter: 'codeframe',
    silent: false,
    eslint: true,
    watch: 'src',
    workers: 1,
}

module.exports = {
    definePlugin() {
        return new Webpack.DefinePlugin(envKeys)
    },
    miniCssExtractPlugin() {
        return new MiniCssExtractPlugin({
            filename: isDevMode() ? '[name].css' : '[name].[contenthash:8].css',
            chunkFilename: isDevMode() ? '[id].css' : '[id].[contenthash:8].css'
        })
    },
    serviceWorker() {
        return new ServiceWorkerWebpackPlugin({
            entry: resolvePath(`${paths.source}/service-worker/index.ts`),
        })
    },
    forkTsCheckerWebpackPlugin() {
        return new ForkTsCheckerWebpackPlugin(configForkTsCheckerWebpackPlugin)
    },
    htmlWebpackPlugin(config) {
        return new HtmlWebpackPlugin({
            ...config,
            inject: true,
            filename: 'index.html',
            template: resolvePath(`${paths.source}/index.html`),
            chunks: 'bundle',
            base: '/'
        })
    },
    terserPlugin() {
        return new TerserPlugin({
            sourceMap: true,
            cache: true,
            parallel: true,
            terserOptions: {
                ecma: 5
            }
        })
    },
    cleanWebpackPlugin() {
        return new CleanWebpackPlugin()
    },
    optimizeCSSAssetsPlugin() {
        return new OptimizeCSSAssetsPlugin()
    }
}
