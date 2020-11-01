module.exports = function toUpperCase(lowercase, uppercase) { // convert all values to uppercase
  return lowercase.map((item) => {
    let uppercaseEyeColor = item.eyeColor.toUpperCase()
    return {eyeColor: uppercaseEyeColor}
  })
}
