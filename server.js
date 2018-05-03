// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// express config
var app = express();

// sets an initial port
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/public')));

// router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// listener - starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});