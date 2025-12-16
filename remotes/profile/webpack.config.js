const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isStandalone = process.env.STANDALONE === "true";

module.exports = {
  mode: "development",
  entry: isStandalone ? "./src/standalone.js" : "./src/index.js",
  devServer: {
    port: 3001,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    ...(isStandalone
      ? [
          new HtmlWebpackPlugin({
            template: "./public/index.html",
          }),
        ]
      : []),

    new ModuleFederationPlugin({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
