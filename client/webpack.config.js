const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction
  
  return {
    mode: isProduction ? 'production' : 'development',
    // when having multiple entry point bcz of code splitting
    // convert it into object
    entry: {
      bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
      // to keep only one build file whenever new build pushes
      clean: true,
      assetModuleFilename: '[name][ext]'
    },
    // to show error in actual code instead of dist
    devtool: isProduction
      ? 'source-map'
      : isDevelopment && 'cheap-module-source-map',
    // for hot reloading
    devServer: {
      // static: {
      //   directory: path.resolve(__dirname, 'public'),
      // },
  
      // allowedHosts: 'all',
      port: 3000,
      // to open browser
      open: true,
      // to enable hot reloading
      hot: true,
      // to enable gzip compression
      compress: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App Name',
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ]
  }
}