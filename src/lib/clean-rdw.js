require('dotenv').config()
const getData = require('./filters/get-rdw-data.js')
// const query = "adw6-9hsg" // use this examplequery when switching to fetching data from API
// const query "figd-gux7" // exitpossibleallday
// const limit = 2
// const appToken = process.env.APP_TOKEN
// const url = `https://opendata.rdw.nl/resource/${query}.json?$limit=${limit}&$$app_token=${appToken}`
const url = require('../_data/datasets/Open_Data_Parkeren__PARKING_OPEN.json')


module.exports = async () => {
  try {
    return cleanData = await getData(url) // wait for data
      .then(data => exitNotPossible(data))
      .then(data => filterTwee(data))
  } catch (err) {
    console.error(err)
  }
}

function exitNotPossible(data) {
  return data.filter(item => item.ExitPossibleAllDay == 0)
}

function filterTwee(data) {
    console.log("Retrieved " + data.length + " records.")
  return data
}
