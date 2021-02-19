const path = require('path');
const webpack = require('webpack');

require('dotenv').config({ path: path.resolve(__dirname, '..', './.env.production') })


module.exports = {
    mode: 'production',

    devServer: {
        contentBase: path.resolve(__dirname, '..', './dist'),
        port: process.env.PORT,
    },
    devtool: 'source-map',
};
