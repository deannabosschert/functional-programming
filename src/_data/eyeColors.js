const CleanEyecolor = require('../lib/filters/clean-eyecolor.js')

module.exports = async function() {
  const eyeColor = await CleanEyecolor()
  return eyeColor;
};
