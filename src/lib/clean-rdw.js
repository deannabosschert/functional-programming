require('dotenv').config()
const getData = require('./filters/get-rdw-data.js')
// const query = "adw6-9hsg" // use this when switching to fetching data from API
// const limit = 2
// const appToken = process.env.APP_TOKEN
// const url = `https://opendata.rdw.nl/resource/${query}.json?$limit=${limit}&$$app_token=${appToken}`
const url = require('../_data/datasets/testlocaties_24_augustus_adressen.json')


module.exports = async () => {
  try {
    return cleanData = await getData(url) // wait for data
      .then(data => filterEen(data))
  } catch (err) {
    console.error(err)
  }
}

function filterEen(data) {
  console.log('filterEen')
  console.log(data)
  return data
}
