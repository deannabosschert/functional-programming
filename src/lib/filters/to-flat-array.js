module.exports = function dataValues(data, variable) { // convert to array of solely the values
  return data.map((item) => {
    return parseFloat(item[variable])
  })
}
