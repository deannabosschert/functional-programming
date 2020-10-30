const CleanEyecolors = require('../lib/clean-eyecolors.js')
const RenderColors = require('../lib/render-eyecolors.js')

// export de async functie, die wacht dan weer to CleanEyecolor is uitgevoerd, return dan de door die functie gereturnde waarde en render deze dan
// dit is async aangezien er komende week nog meer uit te voeren functies bijkomen die asynchroon uitgevoerd mogen worden
module.exports = async () => {
  return eyeColors = await CleanEyecolors()
  .then(data => RenderColors(data))
}
