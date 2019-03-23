var express = require('express')
var routes = require('./routes/routes.js')
var path = require('path')


var app = express()

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
app.use('/api', routes)

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})





