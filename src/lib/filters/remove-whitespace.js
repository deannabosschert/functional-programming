module.exports = function removeWhitespace(data, variable) { // remove excessive tabs at the start or end of a value
  return data.map((item) => {
    return {[variable]: item[variable].trim()}
  })
}
