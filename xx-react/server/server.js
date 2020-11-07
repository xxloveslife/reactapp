const express = require('express')
const app = express()
const userRouter = require('./user')

// app.get('/', function (req, res) {
//     res.send('hello world')

// })
app.use('/user', userRouter)

app.listen(9093, function () {
    console.log('Node app start server at 9093');


})