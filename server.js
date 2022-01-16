var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/messages', (req,res) => {
    res.send(messages)
})

app.post('/messages', (req,res) => {
    console.log(req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

var messages = [
    {name:'Tim', message:'hello'},
    {name:'Jim', message:'hey there'}
]

var server = app.listen(3000, () => {
    console.log('server is listening on port ', server.address().port)
})