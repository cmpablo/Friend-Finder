// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// express config
var app = express();

// sets an initial port
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});