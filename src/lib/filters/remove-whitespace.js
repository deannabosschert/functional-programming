module.exports = function removeWhitespace(data) { // remove excessive tabs at the start or end of a value
  return data.map((item) => {
    const trimmed = item.eyeColor.trim()
    return {eyeColor: trimmed}
  })
}
