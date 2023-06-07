const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",

  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: false,
    port: 1234,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },

      {
        test: /\.css$/,
        exclude: /bootstrap\.min\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //
      {
        test: /bootstrap\.min\.css$/i,
        use: [MiniCssExtractPlugin.loader, "rtlcss-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
    }),

    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html",
    }),
    
    new MiniCssExtractPlugin({ filename: "css/style.css" }),

    new CssMinimizerPlugin(),
  ],
};
