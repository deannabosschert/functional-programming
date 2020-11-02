const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
const getData = require('./filters/get-data.js')
const removeWhitespace = require('./filters/remove-whitespace.js')
const addHash = require('./filters/add-hash.js')
const toUpperCase = require('./filters/to-uppercase.js')
const wordToHex = require('./filters/word-to-hex.js')
const rgbToHex = require('./filters/rgb-to-hex.js')


// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)
// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map
// I should also swap the adding of the hash and the converting..

module.exports = async () => {
  try {
    return cleanColors = await getData(questionnaire) // wait for data
      .then(data => removeWhitespace(data, 'eyeColor')) // remove whitespace
      .then(trimmed => addHash(trimmed)) // add hashtag
      .then(withHash => wordToHex(withHash)) // convert text to hex
      .then(allColors => rgbToHex(allColors)) // convert rgb to hex
      .then(cleanHEX => toUpperCase(cleanHEX, 'eyeColor')) // make uppercase
  } catch (err) {
    console.error(err)
  }
}
