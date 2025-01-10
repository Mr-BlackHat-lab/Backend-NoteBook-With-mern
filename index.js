const express = require("express");
const ConnetToMongo = require('./config/db')

ConnetToMongo();

const app = express()
const port = 8080

app.get('/', (req ,res)=>{
    res.send("hello world")
})

app.listen(port, ()=>{
    console.log(`port is running in http://127.0.0.1:${port}`)
    
})