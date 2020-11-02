const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

const rules = require('./tools/rules')
const alias = require('./tools/alias')
const extensions = require('./tools/extensions')
const plugins = require('./tools/plugins')

const isDevMode = process.env.NODE_ENV === 'development'

module.exports = function (webpackEnv, argv) {
    return {
        resolve: {
            alias,
            extensions
        },
        module: {
            strictExportPresence: true,
            rules: [
                rules.jsFiles,
                rules.tsFiles,
                {
                    test: /\.(stories|story)\.[tj]sx?$/,
                    loader: require.resolve('@storybook/source-loader'),
                    exclude: /node_modules/,
                    enforce: 'pre',
                },
                {
                    test: /\.(stories|story)\.mdx$/,
                    use: [
                        {
                            loader: '@mdx-js/loader',
                            options: {
                                compilers: [createCompiler({})],
                            },
                        },
                    ],
                    exclude: /node_modules/
                },
                rules.cssFiles(isDevMode),
                {
                    oneOf: [
                        rules.imgFiles,
                        rules.fontFiles
                    ]
                }
            ]
        },
        plugins: [
            plugins.forkTsCheckerWebpackPlugin(),
            plugins.miniCssExtractPlugin(isDevMode)
        ],
    }
}
