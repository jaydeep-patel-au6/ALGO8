const express = require('express')
const mongoose = require('mongoose')
require('./config/db.js')
const {mode, msg} = require('./config/keys')

const PORT = process.env.PORT || 3000


const app = express()





app.get('/', (req, res)=>{
    
    res.json({
        mode: mode,
        msg: msg
    })

})


app.listen(PORT, ()=>{
    console.log(`server run on port ${PORT}`)
})