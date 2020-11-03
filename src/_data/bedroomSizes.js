const CleanSizes = require('../lib/clean-sizes.js')
const RenderSizes = require('../lib/render-sizes.js')

// export de async functie, die wacht dan weer to CleanSizes is uitgevoerd, return dan de door die functie gereturnde waarde en render deze dan
// dit is async aangezien er komende week nog meer uit te voeren functies bijkomen die asynchroon uitgevoerd mogen worden
module.exports = async () => {
  return eyesizes = await CleanSizes('bedroomSize')
  // .then(data => return data)
}
