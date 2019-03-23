var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js')
var cors = require('cors')
var path = require('path')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

app.use(cors())
app.use('/api', routes)


var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})



