const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const path = require('path')
const WebSocket = require('ws')

const  wss = new WebSocket.Server({port: 40511})

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

wss.on('connection', function (ws) {
    app.post('/', function(req, res){
        console.log('Post request received.')
        ws.send('Event')
    })
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

// wss.on('connection', function (ws) {
//     ws.send('Message 2')
// })