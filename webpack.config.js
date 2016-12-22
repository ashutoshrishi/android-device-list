module.exports = {
  entry: "./index.js",
  output: {
    path: './dist',
    filename: "android-device-list.min.js",
    library: "androidDeviceList",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
