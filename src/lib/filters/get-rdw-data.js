const fetch = require("node-fetch");

module.exports = function getData(datasource) {
  return new Promise((resolve, reject) => {
  // return fetch(datasource).then(response => response.json()).then((data) => {   // use this when switching to fetching data from API
  //   console.log("Retrieved " + data.length + " records.")
  //   return data
  // })


    // const data = datasource.map(item => ({ // used this for direct mapping: remove later
    //   AreaId: item.AreaId,
    //   AreaManagerId: item.AreaManagerId,
    //   OpenAllYear: item.OpenAllYear,
    //   ExitPossibleAllDay: item.ExitPossibleAllDay
    // }))
    // const data = datasource
    resolve(datasource)
  })


}
