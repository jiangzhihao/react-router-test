var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "#source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(["dist"])
  ],
  devServer: {
    // publicPath: "/",
    inline: true,
    clientLogLevel: "none",//不打印浏览器输出
    // contentBase: path.join(__dirname, "dist"),
    hot: true, // 热启动
    open: true, // 打包好后从浏览器打开
    historyApiFallback: false,
    compress: true,
    overlay: {
      // 项目报错警告，设置成true，在页面上会显示报错
      warnings: true,
      errors: true
    },
    stats: {
      colors: true // 启用/禁用控制台上的颜色。
    },
    port: 3001
  }
};
