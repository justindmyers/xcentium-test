'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import template from 'gulp-template';
import gutil from 'gulp-util';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import historyApiFallback from 'connect-history-api-fallback';

let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    styl: resolveToApp('**/*.styl'), // stylesheets
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: [
        'babel-polyfill',
        path.join(__dirname, root, 'app/app.js')
    ]
};


gulp.task('dev', () => {
    const config = require('./webpack.config');

    config.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
    ].concat(paths.entry);

    let compiler = webpack(config);

    serve({
        port: process.env.PORT || 63095,
        open: false,
        server: {
            baseDir: root
        },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

gulp.task('default', ['serve']);