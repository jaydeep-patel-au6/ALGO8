const mongoose = require('mongoose');
const { mongoURL } = require('./keys')

//databse connection
mongoose
  .connect(
    mongoURL,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected To Database'))
  .catch(err => console.log(err));

