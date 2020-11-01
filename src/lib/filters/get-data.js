module.exports = function getData(datasource, colors) { // get data from questionnaire file
  return new Promise((resolve, reject) => {
    const colors = datasource.map(item => ({
      eyeColor: item.oogKleur
    }))
    resolve(colors)
  })
}
