const CleanSizes = require('../lib/clean-sizes.js')

// export de async functie, die wacht dan weer to CleanSizes is uitgevoerd, return dan de door die functie gereturnde waarde
module.exports = async () => {
  return shoeSizes = await CleanSizes('shoeSize')
}
