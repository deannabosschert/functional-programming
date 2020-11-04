// const d3 = require('d3')
const fetch = require("node-fetch");

module.exports = function getData(url) {
  return fetch(url).then(response => response.json()).then((data) => {
    console.log("Retrieved " + data.length + " records from the dataset!")
    return data
  });
}
