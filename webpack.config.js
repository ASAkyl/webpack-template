import autoprefixer from 'autoprefixer';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  entry: [
    './src/js/index.jsx',
    './src/scss/style.scss',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /vendor/,
        ],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins() { // postcss plugins, can be exported to postcss.config.js
              return [
                autoprefixer,
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
