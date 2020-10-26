const express = require('express')
const app = express()
const QuestionnaireData = require('./lib/get-data.js');

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  QuestionnaireData.eyeColors().then(data => {
    console.log(data)
    res.render('index.ejs', {
      colors: data
    })
  })
})


const server = app.listen(3000, function() {
  console.log('server is running on port 3000')
})
