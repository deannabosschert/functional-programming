const rgbHex = require('rgb-hex')

module.exports = function rgbToHex(data, variable) { // check for rgb answers, then convert them to hex
  return data.map((item) => {
    const matches = item[variable].substring(1, 4).match(/rgb+/g) // check if the string (without the hash) has 'rgb' in it
    if (matches == 'rgb' || matches == 'RGB') {
      return {[variable]: matchRGB(item[variable])}
    } else {
      return {[variable]: item[variable]}
    }
  })
}

function matchRGB(rgb) { // convert rgb answers to hex, using the rgbHex-package
  const cleanRGB = rgb.replace(/\./gi, ',').substring(1)
  return `#${rgbHex(cleanRGB)}`
}
