const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');






module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'), // 2
        filename: 'main.[contenthash].js'  // 3

    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]

    },


};

