const rgbHex = require('rgb-hex')

module.exports = function rgbToHex(data) { // check for rgb answers, then convert them to hex
  return data.map((person) => {
    let eyeColor = person.eyeColor
    const matches = eyeColor.substring(1, 4).match(/rgb+/g)
    if (matches == 'rgb' || matches == 'RGB') {
      const hexColor = matchRGB(eyeColor)
      return {eyeColor: hexColor}
    } else {
      return {eyeColor: eyeColor}
    }
  })
}

function matchRGB(rgb) { // convert rgb answers to hex, using the rgbHex-package
  const cleanRGB = rgb.replace(/\./gi, ',').substring(1)
  return `#${rgbHex(cleanRGB)}`
}
