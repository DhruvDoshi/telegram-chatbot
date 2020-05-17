var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json()) // for parsing application/json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
) //for parsing application / x-www-form-urlencoded


//This is the route api will call 
app.post('/new-message', function(req, res){
    const { message } = req.body
    // Each message contains "text" and a chat object, which has an id, which is the chatbot
})