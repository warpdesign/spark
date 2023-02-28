const themeConf = require('./tailwind.theme.cjs')
const themeUtils = require('@spark-ui/theme-utils')

const utils = {
  isObject(value) {
    return !!value && value.constructor === Object
  },
  isStringOrNumber(value) {
    return typeof value === 'string' || typeof value === 'number'
  },
  toKebabCase(value) {
    return value.replace(/[A-Z0-9]/g, e => `-${e.toLocaleLowerCase()}`)
  },
  doubleHyphensRegex: /(?<!var\()--+/g,
}
function toTailwindConfigViewer(defaultTheme) {
  const result = {}

  function flatten(theme, paths = []) {
    Object.entries(theme).forEach(([key, value]) => {
      if (utils.isObject(value)) {
        return flatten(value, paths.concat(key))
      }

      if (utils.isStringOrNumber(value)) {
        if (paths.includes('colors')) {
          result[
            `rbg(var(--${[...paths, key]
              .map(utils.toKebabCase)
              .join('-')
              .replace(utils.doubleHyphensRegex, '-')}) / <alpha-value>)`
          ] = value
        }

        result[
          `var(--${[...paths, key]
            .map(utils.toKebabCase)
            .join('-')
            .replace(utils.doubleHyphensRegex, '-')})`
        ] = value
      }
    })
  }

  flatten(defaultTheme)

  return result
}

module.exports = {
  theme: {
    ...themeConf,
    configViewer: {
      baseFontSize: 10,
      themeReplacements: toTailwindConfigViewer(themeUtils.defaultTheme),
    },
  },
  content: [],
}
