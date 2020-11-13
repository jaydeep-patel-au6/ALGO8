var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  car_name: { type: String, Required:  'car name cannot be left blank.' },

  car_model:    { type: String, Required:  'car model cannot be left blank.'},

  car_model_year: { type: String, Required:  'car model year category cannot be left blank'}

});

module.exports = mongoose.model('Products', productSchema);