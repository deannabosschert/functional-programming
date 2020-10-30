module.exports = function addHash(data, withHash) {
  return new Promise((resolve, reject) => {
    const withHash = data.map((item) => {
      if (item.startsWith('#')) {
        return item
      } else {
        return '#'.concat(item);
      }
    })
    resolve(withHash)
  })
}
