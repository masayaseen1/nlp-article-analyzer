const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/formProcessor.js',
    output: {
        filename: 'appBundle.js',
        path: path.resolve(__dirname, 'output'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'output'),
        compress: true,
        port: 8080,
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
    ],
};
