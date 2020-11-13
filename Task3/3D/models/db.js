
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb://localhost:27017/Users',
    { useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true}
  )
  .then(() => console.log('MongoDB Connected To Database'))
  .catch(err => console.log(err));


  