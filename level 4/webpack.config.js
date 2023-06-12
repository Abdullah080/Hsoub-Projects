const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",

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
        test: /\.(sa|sc|c)ss$/,
        exclude: /custom\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "rtlcss-loader",
          "sass-loader",
        ],
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

    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),

    new MiniCssExtractPlugin({ filename: "css/style.css" }),

    new CssMinimizerPlugin(),
  ],
};
