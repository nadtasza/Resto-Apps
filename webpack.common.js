const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngquant = require('imagemin-pngquant');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png)$/i, // lakukan testing pada ektensi .jpg .jpeg .png
      pngquant: { quality: '50-50' }, // lakukan kompresi pada file .png dengan kualitas 50-50 %
      plugins: [
        ImageminPngquant({
          speed: 5,
          quality: [0.3, 0.8],
        }),
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    /* new CleanWebpackPlugin(), */
    /* new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }), */
    /* new BundleAnalyzerPlugin(), */
  ],

};
