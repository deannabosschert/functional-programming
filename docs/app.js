import {
  questionnaireData
} from "../lib/get-data.js"

(function init() {
  (async function showData() {
    const dom_eyecolor = document.getElementById("data_eyecolor")
    let cats = await questionnaireData.eyeColors()
    dom_eyecolor.innerHTML = cats[0]

    console.log(cats)
  })()
})()
