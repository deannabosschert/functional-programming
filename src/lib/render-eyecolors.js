
module.exports = function renderColors(cleanEyeColors, rendered) {
    return new Promise((resolve, reject) => {
      const rendered = cleanEyeColors.map((item) => {
        let eyeColor = item.eyeColor
        let renderHTML = `<li style="background-color:${eyeColor};">${eyeColor}</li>`
        return {
          eyeColor: renderHTML
        }
      })
      resolve(rendered)
    })
}
