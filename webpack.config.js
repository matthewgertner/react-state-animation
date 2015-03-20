module.exports = {
  cache: true,

  watch: true,

  entry: {
    'demo': ['./examples/demo/app.js']
  },

  output: {
    filename: '[name].js'
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader?experimental&optional=runtime'}
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'react-state-animation': 'src/ReactStateAnimation.js'
    },
    extensions: ['', '.js', '.jsx']
  }
};