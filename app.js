var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var cheerio = require('cheerio');

var app = express();

// adding routes
require("./routes/routes.js")(app);

// requiring mongo db schema
require('./models/mhw.js');
var mhw = mongoose.model('mhw', mhwSchema, 'mhw');
// adding db to variable
var db = require('./config/database')
// running hbs on main page
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;
// connecting mongoose db
mongoose.connect(db.mongoURI)
.then (() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

var port = process.env.PORT || 5000;

// starting server
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});