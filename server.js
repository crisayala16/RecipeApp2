// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Set mongoose to leverage built in Javascript ES6 Promises
// mongoose.Promise = Promise;

// Setup Express App
var app = express();
// Set an initial port. User this later in listener
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Make public a static dir
app.use(express.static("./public"));

// Routes ----------------------
// app.use(require('./routes/company-routes'));
// app.use(require('./routes/product-routes'));
// app.use(require('./routes/image-routes'));

// MongoDB configuration (URL is connected to Maritant Heroku DB)
// mongoose.connect("mongodb://heroku_14klwm1w:fk0lvti0jjc7ve1cop3d45cpes@ds151702.mlab.com:51702/heroku_14klwm1w");
// var db = mongoose.connection;

//This is for testing in local
// mongoose.connect("mongodb://localhost/productForm");
// var db = mongoose.connection;

// db.on("error", function(err) {
// 	console.log("Mongoose Error: ", err);
// })

// db.on("open", function() {
// 	console.log("Mongoose connection successful.");
// });

// ---------------

// Start EXPRESS Server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});