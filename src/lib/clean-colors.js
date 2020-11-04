const questionnaire = require('../_data/datasets/Survey_Information_Design_clean-parsed.js')
const getData = require('./filters/get-data.js')
const removeWhitespace = require('./filters/remove-whitespace.js')
const addHash = require('./filters/add-hash.js')
const toUpperCase = require('./filters/to-uppercase.js')
const wordToHex = require('./filters/word-to-hex.js')
const rgbToHex = require('./filters/rgb-to-hex.js')

// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map
// I should also swap the adding of the hash and the converting..

module.exports = async (variable) => {
  try {
    return cleanColors = await getData(questionnaire, variable) // wait for data
      .then(data => removeWhitespace(data, variable)) // remove whitespace
      .then(trimmed => addHash(trimmed, variable)) // add hashtag
      .then(withHash => wordToHex(withHash, variable)) // convert text to hex
      .then(allColors => rgbToHex(allColors, variable)) // convert rgb to hex
      .then(cleanHEX => toUpperCase(cleanHEX, variable)) // make uppercase
  } catch (err) {
    console.error(err)
  }
}
