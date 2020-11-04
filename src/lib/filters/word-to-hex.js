const htmlcolors = require('../../_data/datasets/html_colorcodes.js')

module.exports = function wordToHex(data, variable) { // look for the matching hex in the htmlcolors-file
  return data.map((item) => {
    const match = /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(item[variable]) // source for regex: https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
    if (match == false) {
      let word = item[variable].replace(/#/gi, '').toLowerCase()
      for (color of htmlcolors) {
        if (color.NL == word || color.EN == word) {
          return {[variable]: color.HEX}
        }
      }
      return {[variable]: item[variable]}
    } else if (match == true) {
      return {[variable]: item[variable]}
    }
  })
}
