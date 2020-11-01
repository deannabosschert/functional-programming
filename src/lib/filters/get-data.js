module.exports = function getData(datasource, colors) { // get data from questionnaire file
  return new Promise((resolve, reject) => {
    const colors = datasource.map(person => ({
      eyeColor: person.oogKleur
    }))
    resolve(colors)
  })
}
