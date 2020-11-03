const CleanColors = require('../lib/clean-colors.js')
const RenderColors = require('../lib/render-colors.js')

// export de async functie, die wacht dan weer to CleanColors is uitgevoerd, return dan de door die functie gereturnde waarde en render deze dan
// dit is async aangezien er komende week nog meer uit te voeren functies bijkomen die asynchroon uitgevoerd mogen worden
module.exports = async () => {
  return eyeColors = await CleanColors('favoriteColor')
  .then(data => RenderColors(data, 'favoriteColor'))
}
