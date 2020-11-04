const CleanData = require('../lib/clean-rdw.js')

module.exports = async () => {
  const rdwDataset = await CleanData('shoeSize')
  console.log(rdwDataset)

  return rdwDataset
}
