module.exports = [{
  bail: true,
  entry: [
    "./js/index.js",
  ],
  output: {
    filename: "./build/bundle.js",
  },
  devtool: "source-map"
}];
