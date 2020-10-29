const CleanEyecolor = require('../lib/filters/clean-eyecolor.js')
// export de async functie, die wacht dan weer to CleanEyecolor is uitgevoerd, return dan de door die functie gereturnde waarde
// dit is async aangezien er komende week nog meer uit te voeren functies bijkomen die asynchroon uitgevoerd mogen worden
module.exports = async () => {
  return eyeColor = await CleanEyecolor()
}
