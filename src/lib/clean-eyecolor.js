const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)

async function CleanEyecolor() {
  try {
    let eyeColors = getData(questionnaire)  // get all eyecolor-data
    return cleanEyeColors = await addHash(eyeColors)
      .then(withHash => toUpperCase(withHash)) // add hashtag
      .then(uppercase => uppercase) //  make everything uppercase
  } catch (err) {
    console.error(err)
  }
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
        return eyeColor
         // newEyecolor = '#'.concat(eyeColor);
      }
    })
    resolve(withHash)
  })
}

function toUpperCase(lowercase, uppercase) { // dummy/template function for second filter, added in advance
  return new Promise((resolve, reject) => {
    const uppercase = lowercase.map((sentence) => {
      const trimmed = removeWhitespace(sentence)
      return trimmed.toUpperCase()
    })
    resolve(uppercase)
  })
}

function removeWhitespace(data) {
  return data.trim()
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
