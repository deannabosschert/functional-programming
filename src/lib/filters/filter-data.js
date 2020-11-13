module.exports = function filterData(data, variable) { // filter data from questionnaire file
  return data.filter((item) => {
    if (item) {
      return {[variable]: item[variable]}
    }
  })
}
