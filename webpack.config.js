const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "entry.js"),
  output: {
    path: path.join(__dirname, "public", "assets"), 
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
    {
      test: /\.css$/,
      loader: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
	name: 'images/[name].[ext]'
      }
    }]
  },
  node: {fs: "empty"},
}
