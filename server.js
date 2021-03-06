// Use express
var express = require("express");

// Config express

// Create express server
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

// Set up express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER - code "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
