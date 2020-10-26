import {
  questionnaire
} from "../data/Survey_Information_Design_clean-parsed.js"

import {
  cleanEyecolor
} from "./filters/clean-eyecolor.js"


const questionnaireData = {
  eyeColors: () => {
    const eyeColors = questionnaire.map(person => ({
      eyeColor: person.oogKleur
    }))
    const cleanedEyecolors = cleanEyecolor(eyeColors)

    return cleanedEyecolors
  }
}

export {
  questionnaireData
}
