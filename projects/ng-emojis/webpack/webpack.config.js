const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: path.resolve(__dirname, '../../../dist/ng-emojis', 'loader')
          },
          {
            loader: 'raw-loader'
          }
        ]
      }
    ]
  }
};
