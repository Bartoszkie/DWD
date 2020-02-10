const path = require('path');

module.exports = {
  entry: {
    global_script: './scripts/global-srcipt.js',
    carousel: './scripts/carousel.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
};