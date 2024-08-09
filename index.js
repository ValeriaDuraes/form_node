const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/formget', function(req, res){
  console.log(`query: ${JSON.stringify(req.query)}`);
  let x='<ul>'
  for (let prop in req.query) {
    x+=`<li> ${prop} ${req.query[prop]}</li>`
  }
  x+='</ul>'
  res.send(x)
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static(__dirname + '/'))
app.listen(3000, () => {
  console.log('Server listenig on PORT: 3000');
})

