let colors = require('sick-colors')

const colors = {
  ...colors,
  lightBlack: colors.black,
  lightRed: colors.red,
  lightGreen: colors.green,
  lightYellow: colors.yellow,
  lightBlue: colors.blue,
  lightMagenta: colors.magenta,
  lightCyan: colors.cyan,
  lightWhite: colors.foreground,
}

exports.decorateConfig = config => ({
  ...config,
  backgroundColor: colors.background,
  foregroundColor: colors.foreground,
  colors
})
