var express = require("express")
var app = express()

app.use(express.static(__dirname))

app.get('/messages', (req,res) => {
    res.send(messages)
})

var messages = [
    {name:'Tim', message:'hello'},
    {name:'Jim', message:'hey there'}
]

var server = app.listen(3000, () => {
    console.log('server is listening on port ', server.address().port)
})