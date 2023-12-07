/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  entry: {
    server: {
      import: "./src/App/index.ts",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};
