const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx' },
    ],
  },
  external: {
    React: 'React',
    ReactDOM: 'ReactDOM'
  }
}
