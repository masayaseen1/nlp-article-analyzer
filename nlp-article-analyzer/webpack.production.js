const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/scripts/formProcessor.js',
    output: {
        filename: 'appBundle.js',
        path: path.resolve(__dirname, 'output'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/homepage.html',
        }),
        new CleanWebpackPlugin(),
        new WorkboxPlugin.GenerateSW(),
    ],
};
