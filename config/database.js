if(process.env.NODE_ENV === 'production'){
	module.exports = {mongoURI: 'mongodb://andrew:password@ds139950.mlab.com:39950/mongoosehw'}
} else {
	module.exports = {mongoURI: 'mongodb://localhost/mongooseHW'}
}