const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        clean: true,
        //assetModuleFilename: 'img/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                sideEffects: true,
                use: [ 
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader', 
                    /*{
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },*/
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        }
                    },
                ]
            },
            {
                test: /\.html$/i,
                use: [                    
                    'html-loader'
                ]
                
            },
            {
                test: /\.(svg|jpg|png|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: "images/[hash][ext][query]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?.+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[hash][ext][query]",
                },
           },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new HtmlWebpackPlugin( {
            filename: "art-section.html",
            template: path.resolve(__dirname, "./src/art-section.html")
        }),
        new HtmlWebpackPlugin( {
            filename: "design-section.html",
            template: path.resolve(__dirname, "./src/design-section.html")
        }),
        new HtmlWebpackPlugin( {
            filename: "illustration-section.html",
            template: path.resolve(__dirname, "./src/illustration-section.html")
        }),
        new HtmlWebpackPlugin( {
            filename: "photo-section.html",
            template: path.resolve(__dirname, "./src/photo-section.html")
        }),
    ],
    devServer: {
        stats: 'errors-only'
    },
    devtool: 'source-map'
};