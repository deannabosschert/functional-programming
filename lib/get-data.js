import {
  questionnaire
} from "../data/Survey_Information_Design_clean-parsed.js"

const questionnaireData = {
  eyeColors: () => {
    const eyeColors = questionnaire.map(person => ({
      eyeColor: person.oogKleur
    }))
    return eyeColors
  }
}

export {
  questionnaireData
}
