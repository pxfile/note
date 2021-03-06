var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './entry.js',
    output: {
        path: './build',
        filename: 'bundle.js',
    },
    devServer: {
        port: 8000,
        inline: true,
        contentBase: './src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
