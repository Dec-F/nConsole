module.exports = {
  plugins: [
    // require('postcss-import')(),
    // require('precss')(),
    // require('postcss-calc')(),
    // require('postcss-cssnext')()
    // require('postcss-px2rem')({remUnit: 200}),
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};
