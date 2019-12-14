//PATH need to get correct current path
const webpack = require("webpack");
const path = require("path");
//here we always need to export module (nodejs boi)
module.exports = {
  //entry point, you can pick any name and you need to choose file, which will compile first
  entry: {
    index: "./src/index.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  /**
   * output - file, which contain result of compiling
   * filename - name of file, [name] means, that name of file will same as entry point name (app in our case)
   * path - path to file, using path module
   * publicPath - path in our directory, using for put it into HTML
   */
  resolve: {
    modules: ["node_modules"],
    alias: {
      "owl.carousel": "owl.carousel/dist/owl.carousel.min.js"
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist"
  },

  /**
   * Modules
   * test - find all files with .js ext
   * loader - loader of module for webpack, babel loader in our case
   * exclude - exclude folder, files from exclude will not compile by babel
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
