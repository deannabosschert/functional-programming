const CleanEyecolor = require('../lib/filters/clean-eyecolor.js')

// const QuestionnaireData = {
//   eyeColors: () => {
//     const cleanedEyecolors = CleanEyecolor()
//     return cleanedEyecolors
//   }
// }
//
// function dingenDoen() {
//   const haha = "hahaha"
//   return haha
// }
//
// function mixTogether(data) {
//   console.log("mixin'")
//   return data.join()
// }

//
// module.exports = async function() {
//   let eyeColors = await CleanEyecolor();
//   console.log('testttt')
//   console.log(eyeColors)
//   return eyeColors;
// };

module.exports = {
  eleventyComputed: {
    myTemplateString: "This is assumed to be a template string!",
    eenString: "testdingen",
    product_image1: `<img src="../assets/img/product-image1.jpg" alt="Product Image">`,
    eyeColors: async data => await CleanEyecolor()
  }
}

// eyeColor()
// async function eyeColor() {
//   let eyeColors = await CleanEyecolor()
//   console.log('testttt')
//   console.log(eyeColors[0])
//   return eyeColors
// }

// const eyeColors = async data => await CleanEyecolor()
// console.log(eyeColors)
// const testing = QuestionnaireData.eyeColors()


// module.exports = QuestionnaireData
