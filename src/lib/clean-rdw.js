const getData = require('./filters/get-data-d3.js')

require('dotenv').config()
const query = "adw6-9hsg"
const limit = 2
const url = `https://opendata.rdw.nl/resource/${query}.json?$limit=${limit}&$$app_token=${process.env.APP_TOKEN}`

module.exports = async () => {
  try {
    return cleanData = await getData(url) // wait for data
      .then(data => filterEen(data))
  } catch (err) {
    console.error(err)
  }
}

function filterEen(data) {
  console.log(data)
  return data
}
