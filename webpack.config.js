/**
 * Created by wrogers on 10/30/2015.
 */
var webpack = require('webpack');
module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './javascripts/entry.js'],
    },
    output: {
        path: './public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: {stage: 0} },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}