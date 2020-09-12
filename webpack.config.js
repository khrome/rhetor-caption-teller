module.exports = {
    entry: {
        main: './caption-teller.js'
    },
    externals: {
      'rhetor': 'Rhetor',
  },
    node: {
      fs: 'empty',
      tls: 'empty',
      net: 'empty'
    }
};
