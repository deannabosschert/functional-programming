const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)

async function CleanEyecolor(cleanedEyecolor) {
  try {
    let eyeColors = getEyeColors(questionnaire)  // get all eyecolor-data
    let cleanEyeColors = addHashtag(eyeColors)    // add hashtag and some other empty/dummy function in advance
      .then(hashedEyecolors => addYeet(hashedEyecolors))
      .then(yeetEyecolors => yeetEyecolors)
    return cleanedEyecolor = await cleanEyeColors
  } catch (err) {
    console.error(err)
  }
  resolve(cleanedEyecolor)
}

function getEyeColors(questionnaire) {
  return questionnaire.map(person => ({
    eyeColor: person.oogKleur
  }))
}

function addHashtag(eyeColors, hashedEyecolors) {
  return new Promise((resolve, reject) => {
    const hashedEyecolors = eyeColors.map((person) => {
      let eyeColor = person.eyeColor
      if (eyeColor.startsWith('#')) {
        return eyeColor
      } else {
        return newEyecolor = '#'.concat(eyeColor);
      }
    })
    resolve(hashedEyecolors)
  })
}

function addYeet(hashedEyecolors, yeetEyecolors) { // dummy/template function for second filter, added in advance
  return new Promise((resolve, reject) => {
    const yeetEyecolors = hashedEyecolors.map((eyeColor) => {
      if (eyeColor.startsWith('#D')) {
        return newEyecolor = 'esketit'.concat(eyeColor);
      } else {
        return newEyecolor = 'kleur: '.concat(eyeColor);
      }
    })
    resolve(yeetEyecolors)
  })
}

module.exports = CleanEyecolor
