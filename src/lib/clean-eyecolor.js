const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)

async function CleanEyecolor() {
  try {
    let eyeColors = getData(questionnaire)  // get all eyecolor-data
    let cleanEyeColors = addHash(eyeColors)    // add hashtag and make everything uppercase
      .then(withHash => toUpperCase(withHash))
      .then(uppercase => uppercase)
    return cleanedEyecolor = await cleanEyeColors
  } catch (err) {
    console.error(err)
  }
  resolve()
}

function getData(datasource) {
  return datasource.map(person => ({
    eyeColor: person.oogKleur
  }))
}

function addHash(data, withHash) {
  return new Promise((resolve, reject) => {
    const withHash = data.map((person) => {
      let eyeColor = person.eyeColor
      if (eyeColor.startsWith('#')) {
        return eyeColor
      } else {
        return newEyecolor = '#'.concat(eyeColor);
      }
    })
    resolve(withHash)
  })
}

function toUpperCase(lowercase, uppercase) { // dummy/template function for second filter, added in advance
  return new Promise((resolve, reject) => {
    const uppercase = lowercase.map((sentence) => {
      return sentence.toUpperCase()
    })
    resolve(uppercase)
  })
}
//
//
// function toUpperCase(hashedEyecolors, yeetEyecolors) { // dummy/template function for second filter, added in advance
//   return new Promise((resolve, reject) => {
//     const yeetEyecolors = hashedEyecolors.map((eyeColor) => {
//       if (eyeColor.startsWith('#D')) {
//         return newEyecolor = 'esketit'.concat(eyeColor);
//       } else {
//         return newEyecolor = 'kleur: '.concat(eyeColor);
//       }
//     })
//     resolve(yeetEyecolors)
//   })
// }


module.exports = CleanEyecolor
