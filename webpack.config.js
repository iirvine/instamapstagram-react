var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/main.jsx',

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {
      leaflet: path.join(__dirname, 'src', 'vendor', 'leaflet')
    }
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.png$/, loader: 'url-loader'},
    ]
  }
};
