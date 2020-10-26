import {
  cleanEyecolor
} from "./filters/clean-eyecolor.js"

const questionnaireData = {
  eyeColors: () => {
    const cleanedEyecolors = cleanEyecolor()
    return cleanedEyecolors
  }
}
    // const questionnaireData = cleanEyecolor()


// }
// const getQuestionnaireData = {
//     const promise1 = 42;
//     const promise2 = cleanEyecolor()
//
//     let test = Promise.all([promise1, promise2]).then((values) => {
//       console.log(values);
//       return values
//     })
//
//     // expected output: Array [3, 42, "foo"]
//     return test
//
//   }



function dingenDoen() {
  const haha = "hahaha"
  return haha
}

function mixTogether(data) {
  console.log("mixin'")
  return data.join()
}


export {
  questionnaireData
}
