const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  resolve: {
    fallback: {
      https: require.resolve("https-browserify"),
    },
  },
  // інші налаштування...
};
