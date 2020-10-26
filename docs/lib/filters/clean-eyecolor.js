import {
  questionnaire
} from "../../data/Survey_Information_Design_clean-parsed.js"

async function cleanEyecolor(cleanedEyecolor) {
  try {
    // get all eyecolor-data
    let eyeColors = await getEyeColors(questionnaire)
    // add hashtag and some other empty/dummy function in advance
    let cleanedEyeColors = addHashtag(eyeColors)
      .then(hashedEyecolors => addYeet(hashedEyecolors))
      .then(function(yeetEyecolors) {
        return yeetEyecolors
      })

    let cleanedEyecolor = await cleanedEyeColors
    return cleanedEyecolor
  } catch (err) {
    console.error(err)
  }
  resolve(cleanedEyecolor)
}

// const questionnaireData = {
//   eyeColors: () => {
//     const eyeColors = questionnaire.map(person => ({
//       eyeColor: person.oogKleur
//     }))
//     const cleanedEyecolors = cleanEyecolor(eyeColors)
//     return cleanedEyecolors
//   }
// }



function getEyeColors(questionnaire) {
  const eyeColors = questionnaire.map(person => ({
    eyeColor: person.oogKleur
  }))
  return eyeColors
}

function addHashtag(eyeColors, hashedEyecolors) {
  console.log('adding hashtag')
  return new Promise((resolve, reject) => {
    const hashedEyecolors = eyeColors.map((person) => {
      let eyeColor = person.eyeColor
      if (eyeColor.startsWith('#')) {
        return eyeColor
      } else {
        const newEyecolor = '#'.concat(eyeColor);
        return newEyecolor
      }
    })
    resolve(hashedEyecolors)
  })
}

function addYeet(hashedEyecolors, yeetEyecolors) { // dummy function for next cleansing
  console.log('adding yeets')
  // console.log(hashedEyecolors)
  return new Promise((resolve, reject) => {
    const yeetEyecolors = hashedEyecolors.map((eyeColor) => {
      if (eyeColor.startsWith('#D')) {
        const newEyecolor = 'esketit'.concat(eyeColor);
        return newEyecolor
      } else {
        const newEyecolor = 'yeet'.concat(eyeColor);
        return newEyecolor
      }
    })
    resolve(yeetEyecolors)
  })
}

export {
  cleanEyecolor
}
