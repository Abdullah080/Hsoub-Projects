const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '',
    filename: "main.js",
  },

  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      
      {

        test: /\.(png|svg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]', 
              outputPath: "images",
            }
          }
        ]
      },
  
    ],
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
