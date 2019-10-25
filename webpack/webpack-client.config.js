const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  devServer: {
    contentBase: path.resolve('client', 'src'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  entry: {
    client: path.resolve('client', 'src', 'index.js')
  },
  output: {
    path: path.resolve('client', 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loader: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: path.join('assets', 'images')
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('client', 'public', 'index.html')
    })
  ]
}
