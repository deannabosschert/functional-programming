module.exports = function removeWhitespace(data) { // remove excessive tabs at the start or end of a value
  return data.map((person) => {
    const trimmedEyeColor = person.eyeColor.trim()
    return {eyeColor: trimmedEyeColor}
  })
}
