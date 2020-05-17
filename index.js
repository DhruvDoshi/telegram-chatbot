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
    if(!message || message.text.toLowerCase().indexof('hey')<0) {
        //In case a message is not present, or if a message does not have a word hey 
        return res.end()
    }
    // If we had been able to reach this far then we got the message containing hey
    //responding using telegram api
    // If you are cloning this repository then make sure to change the "api key"
    //https://api.telegram.org/bot<API-KEY>/sendMessage

    axios
        .post(
            'https://api.telegram.org/bot1187894084:AAEU_CFsn2gWsvWUJ5x1DC8H5ZvWoxBlufg/sendMessage',
            {
                chat_id: message.chat.id,
                text: 'Fuck You !!'
            }
        )
})