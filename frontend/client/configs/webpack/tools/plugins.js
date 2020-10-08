const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {resolvePath} = require('./helpers');
const paths = require('./paths');

const configForkTsCheckerWebpackPlugin = {
    tsconfig: resolvePath('tsconfig.json'),
    useTypescriptIncrementalApi: true,
    checkSyntacticErrors: true,
    formatter: 'codeframe',
    silent: false,
    tslint: true,
    watch: 'src',
    workers: 1,
}

module.exports = {
    miniCssExtractPlugin(isDevMode) {
        return new MiniCssExtractPlugin({
            filename: isDevMode ? '[name].css' : '[name].[contenthash:8].css',
            chunkFilename: isDevMode ? '[id].css' : '[id].[contenthash:8].css'
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
        });
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
