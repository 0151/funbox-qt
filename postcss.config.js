module.exports = ({ mode }) => {
  const IS_PRODUCTION = mode === 'production'

  return {
    plugins: ['postcss-preset-env', IS_PRODUCTION && 'autoprefixer'],
  }
}
