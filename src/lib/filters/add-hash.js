module.exports = function addHash(data, withHash) { // add hash to answers that don't start with a hash yet
  return data.map((item) => {
    let eyeColor = item.eyeColor
    if (eyeColor.startsWith('#')) {
      return {eyeColor: eyeColor}
    } else {
      const newEyecolor = '#'.concat(eyeColor)
      return {eyeColor: newEyecolor}
    }
  })
}
