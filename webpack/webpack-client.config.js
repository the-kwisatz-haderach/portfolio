const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('client', 'public'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  entry: {
    client: path.resolve('client', 'src', 'index.tsx')
  },
  output: {
    path: path.resolve('client', 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loader: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('client', 'public', 'index.html')
    })
  ]
}
