module.exports = function toUpperCase(data, variable) { // convert all values to uppercase
  return data.map((item) => {
    let uppercase = item[variable].toUpperCase()
    return {[variable]: uppercase}
  })
}
