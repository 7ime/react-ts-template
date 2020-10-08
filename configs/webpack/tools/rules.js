const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

module.exports = {
    jsFiles: {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader'
            }
        ],
        exclude: /node_modules/,
    },
    tsFiles: {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ],
        exclude: /node_modules/
    },
    cssFiles(isDevMode) {
        return {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDevMode,
                    },
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[local]__[hash:base64:5]',
                        }
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }
    },
    imgFiles: {
        test: /\.(bmp|gif|jpe?g|svg|png)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: `${paths.media}/[name].[hash:8].[ext]`,
                }
            }
        ]
    },
    fontFiles: {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
            name: `${paths.fonts}/[name].[hash:8].[ext]`,
        },
    }
}
