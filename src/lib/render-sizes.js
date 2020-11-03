module.exports = function renderColors(cleanColors, variable) {
  return new Promise((resolve, reject) => {
    const rendered = cleanColors.map((item) => {
      let renderHTML = `<li>${item[variable]}</li>`
      return {
        [variable]: renderHTML
      }
    })
    resolve(rendered)
  })
}
