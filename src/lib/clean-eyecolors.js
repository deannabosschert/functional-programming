const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
const htmlcolors = require('../_data/html-kleurcodes.js')
const rgbHex = require('rgb-hex')

// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)
// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map
// I should also swap the adding of the hash and the converting..

module.exports = async () => {
  try {
    return cleanEyeColors = await getData(questionnaire) // wait for data
      .then(data => removeWhitespace(data)) // remove whitespace
      .then(trimmed => addHash(trimmed)) // add hashtag
      .then(withHash => wordToHex(withHash)) // convert text to hex
      .then(allColors => rgbToHex(allColors)) // convert rgb to hex
      .then(cleanHEX => toUpperCase(cleanHEX)) // make uppercase
  } catch (err) {
    console.error(err)
  }
}

function getData(datasource, eyeColors) { // get data from questionnaire file
  return new Promise((resolve, reject) => {
    const eyeColors = datasource.map(person => ({
      eyeColor: person.oogKleur
    }))
    resolve(eyeColors)
  })
}

function removeWhitespace(data) { // remove excessive tabs at the start or end of a value
  return data.map((person) => { // haal hier nog trimmed weg en return heel data.map
    let trimmedEyeColor = person.eyeColor.trim()
    return {eyeColor: trimmedEyeColor}
  })
}

function addHash(data, withHash) { // add hash to answers that don't start with a hash yet
  return data.map((person) => {
    let eyeColor = person.eyeColor
    if (eyeColor.startsWith('#')) {
      return {eyeColor: eyeColor}
    } else {
      const newEyecolor = '#'.concat(eyeColor)
      return {eyeColor: newEyecolor}
    }
  })
}

function wordToHex(data) { // look for the matching hex in the htmlcolors-file
  return data.map((person) => {
    let eyeColor = person.eyeColor
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

function rgbToHex(data) { // check for rgb answers, then convert them to hex
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

function toUpperCase(lowercase, uppercase) { // convert all values to uppercase
  return lowercase.map((item) => {
    let uppercaseEyeColor = item.eyeColor.toUpperCase()
    return {eyeColor: uppercaseEyeColor}
  })
}
