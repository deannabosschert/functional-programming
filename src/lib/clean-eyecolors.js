const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
const htmlcolors = require('../_data/html-kleurcodes.js')
// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)
// I should refactor everything in a way that I map over the values at first, then filter and reduce instead of repeating to map

module.exports = async () => {
  try {
    return cleanEyeColors = await getData(questionnaire) // wait for data
      .then(data => removeWhitespace(data)) // remove whitespace
      .then(trimmed => addHash(trimmed)) // add hashtag
      .then(withHash => wordToHex(withHash)) // convert to hex
      .then(allColors => rgbToHex(allColors)) // convert to hex
      .then(cleanHEX => toUpperCase(cleanHEX)) // make uppercase
  } catch (err) {
    console.error(err)
  }
}

function getData(datasource, eyeColors) {
  return new Promise((resolve, reject) => {
    const eyeColors = datasource.map(person => ({
      eyeColor: person.oogKleur
    }))
    resolve(eyeColors)
  })
}

function addHash(data, withHash) {
  return new Promise((resolve, reject) => {
    const withHash = data.map((person) => {
      let eyeColor = person.eyeColor
      if (eyeColor.startsWith('#')) {
        return {
          eyeColor: eyeColor
        }
      } else {
        const newEyecolor = '#'.concat(eyeColor)
        return {
          eyeColor: newEyecolor
        }
      }
    })
    resolve(withHash)
  })
}

function toUpperCase(lowercase, uppercase) { // make values uppercase
  return new Promise((resolve, reject) => {
    const uppercase = lowercase.map((item) => {
      let uppercaseEyeColor = item.eyeColor.toUpperCase()
      return {
        eyeColor: uppercaseEyeColor
      }
    })
    resolve(uppercase)
  })
}

function removeWhitespace(data, trimmed) { // remove excessive tabs at the start or end of a value
  return new Promise((resolve, reject) => {
    const trimmed = data.map((person) => { // haal hier nog trimmed weg en return heel data.map
      let trimmedEyeColor = person.eyeColor.trim()
      return {
        eyeColor: trimmedEyeColor
      }
    })
    resolve(trimmed)
  })
}

function wordToHex(data, converted) {
  return new Promise((resolve, reject) => {
    const converted = data.map((person) => {
      let eyeColor = person.eyeColor
      const match = /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(eyeColor) // source for regex: https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
      if (match == false) {
        let word = eyeColor.replace(/#/gi, '').toLowerCase()
        for (color of htmlcolors) {
          if (color.NL == word || color.EN == word) {
            return {
              eyeColor: color.HEX
            }
          }
        }
        return {
          eyeColor: eyeColor
        }
      } else if (match == true) {
        return {
          eyeColor: eyeColor
        }
      }
    })
    resolve(converted)
  })
}

function rgbToHex(data, cleanHex) {
  return new Promise((resolve, reject) => {
    const cleanHex = data.map((person) => {
      let eyeColor = person.eyeColor
      const matches = eyeColor.substring(1, 4).match(/rgb+/g)
      if (matches == 'rgb' || matches == 'RGB') {
        const hex = matchRGB(eyeColor.replace(/#/gi, ''))
        // console.log(hex)
        return {
          eyeColor: 'rgbkleurtjes'
        }
      } else {
        return {
          eyeColor: eyeColor
        }
      }
    })
    resolve(cleanHex)
  })
}

// #rgb(139.69,19) #8B4513


function matchRGB(rgb) {
  const r = rgb.substring(4, 7)
  const g = rgb.substring(8, 10)
  const b = rgb.substring(11, 13)
  console.log(`rgb ${r}, ${g}, ${b}`)
  console.log(r)
  console.log(g)
  console.log(b)

  // const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  // console.log(hex)


  function rgbToHex(r, g, b) {
    console.log(r)
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  console.log(rgbToHex(r, g, b)); // #0033ff



  return rgb
}


//
// function toUpperCase(hashedEyecolors, yeetEyecolors) { // dummy/template function for second filter, added in advance
//   return new Promise((resolve, reject) => {
//     const yeetEyecolors = hashedEyecolors.map((eyeColor) => {
//       if (eyeColor.startsWith('#D')) {
//         return newEyecolor = 'esketit'.concat(eyeColor)
//       } else {
//         return newEyecolor = 'kleur: '.concat(eyeColor)
//       }
//     })
//     resolve(yeetEyecolors)
//   })
// }
