﻿var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'raw-loader'
        }, ],
        rules: [{
            test: /\.(js)$/,
            use: 'babel-loader',
            exclude: /(node_modules)/
        }]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        })
    ],
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'client')
    }
};