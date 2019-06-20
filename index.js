const colors = require('sick-colors')

module.exports.decorateConfig = config => {
  const themeColors = config.theme === 'light' ? colors.light : colors
  const altColors = config.theme === 'light' ? colors : colors.light

  return {
    ...config,
    colors: {
      ...themeColors,
      lightBlack: altColors.black,
      ligthRed: altColors.red,
      lightGreen: altColors.green,
      lightYellow: altColors.yellow,
      lightBlue: altColors.blue,
      lightMagenta: altColors.magenta,
      lightCyan: altColors.cyan
    },
    backgroundColor: themeColors.background,
    foregroundColor: themeColors.foreground
  }
}
