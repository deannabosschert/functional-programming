const htmlcolors = require('../../_data/html-kleurcodes.js')

module.exports = function wordToHex(data) { // look for the matching hex in the htmlcolors-file
  return data.map((item) => {
    let eyeColor = item.eyeColor
    const match = /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(eyeColor) // source for regex: https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
    if (match == false) {
      let word = eyeColor.replace(/#/gi, '').toLowerCase()
      for (color of htmlcolors) {
        if (color.NL == word || color.EN == word) {
          return {eyeColor: color.HEX}
        }
      }
      return {eyeColor: eyeColor}
    } else if (match == true) {
      return {eyeColor: eyeColor}
    }
  })
}
