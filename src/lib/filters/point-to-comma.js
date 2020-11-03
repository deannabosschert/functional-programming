module.exports = function pointToComma(data, variable) {
  return data.map((item) => {
    return {[variable]: item[variable].replace(/\./gi, ',')}
  })
}
