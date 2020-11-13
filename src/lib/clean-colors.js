const getData = require('./filters/get-data.js')
const filterData = require('./filters/filter-data.js')
const removeWhitespace = require('./filters/remove-whitespace.js')
const addHash = require('./filters/add-hash.js')
const toUpperCase = require('./filters/to-uppercase.js')
const wordToHex = require('./filters/word-to-hex.js')
const rgbToHex = require('./filters/rgb-to-hex.js')
const sortData = require('./filters/sort-data.js')


// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map

module.exports = async (variable) => {
  try {
    return cleanColors = await getData() // wait for data
      .then(data => filterData(data, variable)) // filter usable data
      .then(data => removeWhitespace(data, variable)) // remove whitespace
      .then(trimmed => addHash(trimmed, variable)) // add hashtag
      .then(withHash => wordToHex(withHash, variable)) // convert text to hex
      .then(allColors => rgbToHex(allColors, variable)) // convert rgb to hex
      .then(cleanHEX => toUpperCase(cleanHEX, variable)) // make uppercase
      .then(data => sortData(data, variable)) // sort data
  } catch (err) {
    console.error(err)
  }
}
