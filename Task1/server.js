const express = require('express')
const PORT = 3000

const app = express()

app.get('/', (req, res)=>{
    res.send('web page display data')
})

app.listen(PORT, ()=>{
    console.log(`server run on port ${PORT}`)
})