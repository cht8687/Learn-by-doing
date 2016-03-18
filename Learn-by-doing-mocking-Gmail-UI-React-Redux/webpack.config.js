var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var autoprefixer = require('autoprefixer');
var poststylus = require('poststylus');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {filename: 'bundle.js', path: path.resolve('src')},
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
       NODE_ENV: '"' + env + '"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loaders: ['react-hot', 'babel'],
        include: [path.resolve('src')]
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('css?sourceMap') 
      },
      { 
        test: /\.styl$/, 
        loader: ExtractTextPlugin.extract('style','css?sourceMap&modules&importLoaders=1!stylus'), 
        include: [path.resolve('src')]
      }
    ],
    preLoaders: [
      {
        test: /\.js$/, 
        loaders: ['eslint-loader'], 
        include: [path.resolve('src')]
      }
    ]
  },
  stylus: {
    use: [
      poststylus([ 'autoprefixer', 'rucksack-css' ])
    ]
  },
  resolve: { 
    extensions: ['', '.js', '.styl'], 
    alias: { styles: path.resolve('src/styles')} 
  },
  stats: { colors: true },
  eslint: { configFile: 'src/.eslintrc' },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true
    }
  }
};
