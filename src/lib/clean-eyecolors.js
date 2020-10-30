const questionnaire = require('../_data/Survey_Information_Design_clean-parsed.js')
const htmlcolors = require('../_data/html-kleurcodes.js')
// all function + variable names will be refactored as they're unclear af right now (for the sake of testing/dev)

module.exports = async () => {
  try {
    return cleanEyeColors = await getData(questionnaire) // wait for data
      .then(data => removeWhitespace(data)) // remove whitespace
      .then(trimmed => addHash(trimmed)) // add hashtag
      .then(withHash => wordToHex(withHash)) // convert to hex
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

// function rgbtohex() {
//
// }

function wordToHex(data, converted) {
  return new Promise((resolve, reject) => {
    // const kleuren = htmlcolors[0].NL
    // console.log(kleuren)

    const converted = data.map((person) => {
      let eyeColor = person.eyeColor
      const match = /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(person.eyeColor) // source for regex: https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
      // let teken = eyeColor.charAt(0).valueOf()
      // let matches = teken.match(/\d+/g)

      if (match == false) {
        let word = eyeColor.replace(/#/gi, '').toLowerCase()
        console.log('word' + word)
        // const matchie = woorden.map((word) => {
        for (color of htmlcolors) {
          if (word == color.naam) {
            console.log('yeeeet')
            console.log(color.NL)
            // return color.NL
          }
        }
        return {
          eyeColor: eyeColor
        }

        // for (word in htmlcolors.NL) {
        //   if (word = color.NL) {
        //     // console.log('woord: ' + word)
        //     // console.log('kleur: ' + color.NL)
        //     // console.log('engels: ' + color.EN)
        //     console.log('hex: ' + color.HEX)
        //     return {
        //       eyeColor: color.HEX
        //     }
        //   } else {
        //     console.log('zit er niet in')
        //     const teruggeven = 'zit er niet in' + eyeColor
        //     return {
        //       eyeColor: teruggeven
        //     }
        //   }
        // }
        // })

      } else if (match == true) {
        console.log('klopt wel')
        return {
          eyeColor: eyeColor
        }
      } else {
        console.log('idk nothing left')
      }


      // if (matches == null) {
      //   // console.log(eyeColor)
      //   // console.log('geen nummer') // return
      //   return {
      //     eyeColor: eyeColor
      //   }
      // } else {

      // }
    })
    resolve(converted)
  })
}



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
