const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve('src'),

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.ts', '.jsx', '.tsx'],
    alias: {
      '@src': SRC_PATH,
    },
    modules: ['node_modules'],
  },
};
