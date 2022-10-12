const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['css-loader']
      // },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  // plugin: [
  //   new HtmlWebpackPlugin({})
  // ]
};
