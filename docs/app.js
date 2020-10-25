import {
  questionnaireData
} from "../lib/get-data.js"
const dom_eyecolor = document.getElementById("data_eyecolor")

const theData = questionnaireData.eyeColors()
console.log(theData)
dom_eyecolor.innerHTML = theData[0].eyeColor
