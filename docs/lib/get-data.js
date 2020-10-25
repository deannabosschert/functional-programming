import {
  dingen
} from "../data/Survey_Information_Design_clean-parsed.js"

const gooiDingen = {
  column1: () => {


    const dingenLijst = dingen.map(ding => ({
      geboorte: ding.geboortedatum,
      broers: ding.hoeveelheidBroers

    }))

    // const yeet = "yeet"
    // return yeet
    console.log('dingenLijst')
    // console.log(dingenLijst)
    return dingenLijst
  }
}



    export {
      gooiDingen
    }
