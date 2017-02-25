const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?importLoaders=1!',
            'postcss-loader'
          ],
        },
      ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
};
