var webpack = require('webpack');  
module.exports = {  
  entry: './app.ts',
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "./dist/bundle.js.map",
    pathinfo: true,
    path: __dirname,
    filename: './dist/bundle.js'
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.glsl/, loader: 'raw-loader' }
    ]
  }
}