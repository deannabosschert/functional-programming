import {
  questionnaireData
} from "../lib/get-data.js"

(function init() {
  (async function showData() {
    const dom_eyecolor = document.getElementById("data_eyecolor")
    let theData = await questionnaireData.eyeColors()
    dom_eyecolor.innerHTML = theData[0]

    console.log(theData)
  })()
})()
