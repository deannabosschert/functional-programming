require('dotenv').config()
const getData = require('./filters/get-rdw-data.js')
// const query = "figd-gux7" // exitpossibleallday, use this query when switching to fetching data from API
// const limit = 2
// const appToken = process.env.APP_TOKEN
// const url = `https://opendata.rdw.nl/resource/${query}.json?$limit=${limit}&$$app_token=${appToken}`
const parkingopenurl = require('../_data/datasets/Open_Data_Parkeren__PARKING_OPEN.json')
const openingstijdenurl = require('../_data/datasets/Open_Data_Parkeren__PARKING_TOEGANG.json')

module.exports = async () => {
  try {
    return cleanData = await getData(parkingopenurl) // wait for data
      .then(data => mapData(data)) // get usable data
      .then(data => exitNotPossible(data)) // filter data
      .then(data => checkOpeningTimes(data))
  } catch (err) {
    console.error(err)
  }
}

function mapData(data) {
  return data.map(item => ({
    AreaId: item.AreaId,
    AreaManagerId: item.AreaManagerId,
    OpenAllYear: item.OpenAllYear,
    ExitPossibleAllDay: item.ExitPossibleAllDay
  }))
}

function exitNotPossible(data) {
  console.log("Retrieved " + data.length + " records.")
  return data.filter(item => item.ExitPossibleAllDay == 0)
}

function checkOpeningTimes(data) {
  console.log("Retrieved " + data.length + " records.")
  // const result = data.filter(item => item.AreaId == openingstijdenurl.AreaId)
  const datatoo = openingstijdenurl
  const result = datatoo.filter(item => item.AreaId == "796_PRVLI")
  console.log(result)
  // "AreaManagerId": 268,
  // "AreaId": "268_KELFKB",
    // let areaId = item.AreaId
    //
    //
    //   if (locatie.AreaId == "796_PRVLI" && item.AreaId == "796_PRVLI") {
    //     return {
    //       AreaId: locatie.AreaId,
    //       AreaManagerId: locatie.AreaManagerId,
    //       Days: locatie.Days,
    //       EnterFrom: locatie.EnterFrom,
    //       EnterUntil: locatie.EnterUntil
    //     }
    //
    //
    //   console.log("Retrieved " + dingen.length + " records.")
    // }


  // return dingen
}
