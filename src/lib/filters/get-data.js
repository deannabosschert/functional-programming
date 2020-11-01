module.exports = function getData(datasource, key, variable) {
  return datasource.map(person => ({
    key: person.variable
  }))
}
