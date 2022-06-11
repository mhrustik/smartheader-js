const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { VueLoaderPlugin } = require('vue-loader')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

console.log(`Mode ----> ${mode}`)

module.exports = {
    mode: mode,
    entry: {
        "smart-header": './src/index.js'
    },
    output: {
        filename: '[name].js',
        assetModuleFilename: "assets/[name]",
        clean: true,
        library: 'SmartHeader',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: false,
        }),
        // new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader'
            // },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: false,
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
}