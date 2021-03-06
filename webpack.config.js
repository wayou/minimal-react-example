const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  resolve: {extensions: ['*', '.js', '.jsx']},
  devtool: 'source-map',
  devServer: {contentBase: './dist'}
};
