module.exports = function pointToComma(data, variable) { // convert points in answers, to comma
  return data.map((item) => {
    return {[variable]: item[variable].replace(/\./gi, ',')}
  })
}
