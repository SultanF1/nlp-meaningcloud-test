var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!')
})

app.get('/test', function (req, res) {
    
    res.send(mockAPIResponse)
})

app.get('/key',function(req,res){
    res.send(apiKey)
})

