const colors = require('sick-colors')

module.exports.decorateConfig = config => ({
  ...config,
  colors: {
    ...colors,
    lightBlack: colors.black,
    ligthRed: colors.red,
    lightGreen: colors.green,
    lightYellow: colors.yellow,
    lightBlue: colors.blue,
    lightMagenta: colors.magenta,
    lightCyan: colors.cyan
  },
  backgroundColor: colors.background,
  foregroundColor: colors.foreground
})
