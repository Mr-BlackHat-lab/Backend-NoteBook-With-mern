const express = require("express");
const ConnetToMongo = require('./config/db')

ConnetToMongo();

const app = express()
const port = 8080

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, ()=>{
    console.log(`port is running in http://127.0.0.1:${port}`)
    
})