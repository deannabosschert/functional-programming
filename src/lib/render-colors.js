module.exports = function renderColors(cleanColors, variable) { // bit of a dirty fix to do it like this
  return new Promise((resolve, reject) => {
    const rendered = cleanColors.map((item) => {
      if (item[variable] == "#FFFFFF") {
        let renderHTML = `<li style="background-color:${item[variable]}; color: #000000">${item[variable]}</li>`
        return {[variable]: renderHTML}
      } else {
        let renderHTML = `<li style="background-color:${item[variable]};">${item[variable]}</li>`
        return {[variable]: renderHTML}
      }
    })
    resolve(rendered)
  })
}
