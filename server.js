const express = require('express')
const app = express()
const QuestionnaireData = require('./lib/get-data.js');

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  QuestionnaireData.eyeColors().then(eyeColors => {
    console.log(eyeColors)
    res.render('index.html', {
      eyeColors: eyeColors
    })
  })
})


const server = app.listen(3000, function() {
  console.log('server is running on port 3000')
})
