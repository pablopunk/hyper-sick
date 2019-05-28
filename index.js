const colors = require('sick-colors')

module.exports.decorateConfig = config => ({
  ...config,
  backgroundColor: colors.background,
  foregroundColor: colors.foreground,
  colors
})
