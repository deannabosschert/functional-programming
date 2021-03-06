const questionnaire = require('../_data/datasets/Survey_Information_Design_clean-parsed.js')
const getData = require('./filters/get-data.js')
const removeWhitespace = require('./filters/remove-whitespace.js')
const pointToComma = require('./filters/point-to-comma.js')
const dataValues = require('./filters/to-flat-array.js')
const sortData = require('./filters/sort-data.js')

// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map

module.exports = async (variable) => {
  try {
    return cleanColors = await getData(questionnaire, variable) // wait for data
      .then(data => removeWhitespace(data, variable)) // remove whitespace
      .then(data => pointToComma(data, variable)) // replace points with comma's
      .then(data => dataValues(data, variable)) // convert to array of only the values
      .then(data => sortData(data, variable)) // sort data
  } catch (err) {
    console.error(err)
  }
}
