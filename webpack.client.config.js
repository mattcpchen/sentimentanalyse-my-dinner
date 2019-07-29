const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname , './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module : {
    rules : [
      {
        test : /\.(js)$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    colors: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true,
    inline: true
  },
  optimization: {
    nodeEnv: false
  }
};
