import {
  questionnaireData
} from "../lib/get-data.js"

(function init() {
  (async function showData() {
    const dom_eyecolor = document.getElementById("data_eyecolor")
    let persons = await questionnaireData.eyeColors()
    dom_eyecolor.innerHTML = persons[0]

    console.log(persons)
  })()
})()
