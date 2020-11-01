module.exports = function removeWhitespace(data) { // remove excessive tabs at the start or end of a value
  return data.map((person) => { // haal hier nog trimmed weg en return heel data.map
    let trimmedEyeColor = person.eyeColor.trim()
    return {eyeColor: trimmedEyeColor}
  })
}
