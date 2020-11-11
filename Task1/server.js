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



//An error handling middleware
app.use((err, req, res, next) => {
    res.status(500);
    res.send("Somthing wrong. Please try again")
    
 });
    

    

app.listen(PORT, ()=>{
    console.log(`server run on port ${PORT}`)
})