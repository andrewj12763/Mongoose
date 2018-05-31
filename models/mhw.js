var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
 mhwSchema = new Schema({
  title:{
    type: String,
	},
	description:{
		type: String,
	},
	url:{
		type: String,
	}
});

mongoose.model('mhw', mhwSchema);