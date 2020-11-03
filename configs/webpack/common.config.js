const {resolvePath} = require('./tools/helpers')
const paths = require('./tools/paths')
const rules = require('./tools/rules')
const extensions = require('./tools/extensions')
const alias = require('./tools/alias')
const plugins = require('./tools/plugins')

module.exports = {
    context: resolvePath(paths.source),
    entry : {
        main: './index.tsx'
    },
    output: {
        path: resolvePath(paths.dist)
    },
    resolve: {
        alias,
        extensions
    },
    module: {
        strictExportPresence: true,
        rules: [
            rules.jsFiles,
            rules.tsFiles,
            rules.cssFiles(),
            {
                oneOf: [
                    rules.imgFiles,
                    rules.fontFiles
                ]
            }
        ]
    },
    plugins: [
        plugins.definePlugin(),
        plugins.forkTsCheckerWebpackPlugin(),
        plugins.miniCssExtractPlugin(),
        plugins.serviceWorker()
    ],
    performance: {
        hints: false
    }
}
