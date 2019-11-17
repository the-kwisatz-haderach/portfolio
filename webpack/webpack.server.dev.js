const path = require('path')
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'development',
  watch: true,
  entry: {
    server: path.resolve('server', 'src', 'index.ts')
  },
  output: {
    path: path.resolve('server', 'build'),
    filename: '[name].bundle.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv()
  ]
}
