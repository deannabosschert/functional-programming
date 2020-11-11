module.exports = function filterData(data, variable) { // filter data from questionnaire file
  const colors = data.filter(item => ({
    [variable]: item[variable]
  }))
  return colors
}
