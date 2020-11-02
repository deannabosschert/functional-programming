module.exports = function addHash(data, variable) { // add hash to answers that don't start with a hash yet
  return data.map((item) => {
    if (item[variable].startsWith('#')) {
      return {[variable]: item[variable]}
    } else {
      return {[variable]: '#'.concat(item[variable])}
    }
  })
}
