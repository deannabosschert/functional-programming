module.exports = function getData(datasource, variable) { // get data from questionnaire file
  return new Promise((resolve, reject) => {
    const colors = datasource.filter(item => ({
      [variable]: item[variable]
    }))
    resolve(colors)
  })
}
