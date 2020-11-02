module.exports = function toUpperCase(data, variable) { // convert all values to uppercase
  return data.map((item) => {
    return {[variable]: item[variable].toUpperCase()}
  })
}
