module.exports = function sortData(data, variable) { // sort all items
  return data.sort((a, z) => a[variable] - z[variable])
}
