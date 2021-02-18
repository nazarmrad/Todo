var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var setupcontroller = require('./controllers/setupcontroller');
var apicontroller = require('./controllers/apicontroller');
var app = express();

// setting a port variable 
var port = process.env.port || 3000;


app.use('/assets', express.static(__dirname+'/public'));
// setting ejs a the view engine
app.set("view engine", "ejs");

// connecting to the db

mongoose.connect(config.getDbConnectionString());
setupcontroller(app);
apicontroller(app);



app.listen(port);