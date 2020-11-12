const db = require('../config/config').get(process.env.NODE_ENV)
const mongoose = require('mongoose')
const {DATABASE} = require('../config/config')

mongoose
  .connect(
    'mongodb://localhost:27017/Users',
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected To Database'))
  .catch(err => console.log(err));


  