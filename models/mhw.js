var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
 mhwSchema = new Schema({
  title:{
    type: String,
    // required: true
  }
});

mongoose.model('mhw', mhwSchema);