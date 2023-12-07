/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const webpack = require("webpack");

require("dotenv").config();

const server = merge(common, {
  mode: "production",
});

module.exports = server;
