const path = require('path')

module.exports = {
  context: __dirname,  // project path
  entry: './js/ClientApp.js',  // entry point to app
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']  // the type of file extensions it'll try to find when importing without an extension
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // if it ends in js
        loader: 'babel-loader'  // run it through babel-loader
      }
    ]
  }
}
