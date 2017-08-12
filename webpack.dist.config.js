var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
};

config.module.rules = config.module.rules.concat([{
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract({
        fallback: {
            loader: 'style-loader'
        },
        use: [
            'css-loader',
            {
                loader: 'stylus-loader'
            }
        ]
    })
}]);


config.plugins = config.plugins.concat([
    new ExtractTextPlugin("styles.css"),



    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
        mangle: {

            // You can specify all variables that should not be mangled.
            // For example if your vendor dependency doesn't use modules
            // and relies on global variables. Most of angular modules relies on
            // angular global variable, so we should keep it unchanged
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    })
]);

module.exports = config;