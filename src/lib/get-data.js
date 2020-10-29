const CleanEyecolor = require('./filters/clean-eyecolor.js')

const QuestionnaireData = {
  eyeColors: () => {
    const cleanedEyecolors = CleanEyecolor()
    return cleanedEyecolors
  }
}

module.exports = QuestionnaireData
