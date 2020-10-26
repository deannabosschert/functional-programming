const CleanEyecolor = require('./filters/clean-eyecolor.js')

const QuestionnaireData = {
  eyeColors: () => {
    const cleanedEyecolors = CleanEyecolor()
    return cleanedEyecolors
  }
}

function dingenDoen() {
  const haha = "hahaha"
  return haha
}

function mixTogether(data) {
  console.log("mixin'")
  return data.join()
}

module.exports = QuestionnaireData
