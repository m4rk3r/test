const path = require('path');

module.exports = {
  mode: 'production',
  entry: './browser.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shepherd.bundle.js'
  }
};
