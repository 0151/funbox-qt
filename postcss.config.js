module.exports = ({ mode }) => {
  const IS_PRODUCTION = mode === 'production'

  return {
    plugins: [
      'postcss-mixins',
      ['postcss-simple-vars', { silent: true }],
      'postcss-nested-ancestors',
      'postcss-nested',
      'postcss-preset-env',
      IS_PRODUCTION && 'autoprefixer',
    ],
  }
}
