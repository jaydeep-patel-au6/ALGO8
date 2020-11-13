var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var PORT = 3000

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'))

//josn body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log(`server runs on port number ${PORT}`)
})