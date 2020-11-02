module.exports = function removeWhitespace(data, variable) { // remove excessive tabs at the start or end of a value
  return data.map((item) => {
    const trimmed = item[variable].trim()
    return {[variable]: trimmed}
  })
}
