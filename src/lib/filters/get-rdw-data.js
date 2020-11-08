const fetch = require("node-fetch");

module.exports = function getData(datasource, variable) {
  // return fetch(url).then(response => response.json()).then((data) => {   // use this when switching to fetching data from API
  //   console.log("Retrieved " + data.length + " records.")
  //   return data
  // })
  return new Promise((resolve, reject) => {
    const data = datasource.map(item => ({ // use this when determined which keys to use
      AreaId: item.AreaId,
      AreaManagerId: item.AreaManagerId,
      OpenAllYear: item.OpenAllYear,
      ExitPossibleAllDay: item.ExitPossibleAllDay
    }))

    resolve(data)
  })


}
