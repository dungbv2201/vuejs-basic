const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    host:'localhost',
    port: 3000,
    open: true
  }
}