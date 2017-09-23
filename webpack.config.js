const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },

  entry: {
    content: './content.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader'
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: { name: '[name].[ext]' }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
