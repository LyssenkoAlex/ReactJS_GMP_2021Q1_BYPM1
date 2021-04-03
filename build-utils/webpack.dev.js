const path = require("path");
const webpack = require("webpack");

require("dotenv").config({ path: path.resolve(__dirname, "..", "./.env.development") });

module.exports = {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new Dotenv({
    // path: path.resolve(__dirname, '..', './.env.development'),
    // }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "..", "./dist"),
    hot: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
};

console.log("PORT: ", process.env.PORT);
