const express = require('express')
const app = express()
const port = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

http.createServer(app).listen(port, function() {
  console.log("HTTP server listening on port " + port)
})