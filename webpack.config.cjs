const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',  // Path ke file index.js di root folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // File output setelah bundling
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Rule untuk file JavaScript/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,  // Rule untuk file CSS
        use: ['style-loader', 'css-loader'],  // Tambahkan loader untuk CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Path ke file index.html di root folder
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,  // Buka browser otomatis
    port: 3000,  // Port dev server
  },
};
