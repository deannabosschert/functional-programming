require('dotenv').config()
const fetch = require("node-fetch") // i've placed those here because of readability

module.exports = function getData() { // get data from questionnaire file via secret gist
  return fetch(process.env.QUESTIONNAIRE_URL)
    .then(res => res.json())
}
