module.exports = function filterData(data, variable) { // filter data from questionnaire file
  return data.filter(item => ({
    [variable]: item[variable]
  }))
}
