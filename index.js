const colors = require('sick-colors')

module.exports.decorateConfig = config => {
  const themeColors = config.theme === 'light' ? colors.light : colors

  return {
    ...config,
    themeColors: {
      ...themeColors,
      lightBlack: themeColors.black,
      ligthRed: themeColors.red,
      lightGreen: themeColors.green,
      lightYellow: themeColors.yellow,
      lightBlue: themeColors.blue,
      lightMagenta: themeColors.magenta,
      lightCyan: themeColors.cyan
    },
    backgroundColor: themeColors.background,
    foregroundColor: themeColors.foreground
  }
}
