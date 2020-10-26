import {
  cleanEyecolor
} from "./filters/clean-eyecolor.js"

const questionnaireData = {
  eyeColors: () => {
    const cleanedEyecolors = cleanEyecolor()
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

export {
  questionnaireData
}
