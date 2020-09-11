module.exports = {
    entry: {
        main: './caption-teller.js'
    },
    externals: {
      'story-teller': 'StoryTeller',
  },
    node: {
      fs: 'empty',
      tls: 'empty',
      net: 'empty'
    }
};
