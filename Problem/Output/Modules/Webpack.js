// Webpack Entry and Output
// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
};

// What does Webpack do when bundling files with this configuration?
