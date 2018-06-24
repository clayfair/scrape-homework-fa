var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var nodemon = require("nodemon");
var path = require("path");

// Our scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/hackerNews");


// Route for getting all Articles from the db
app.get("/articles", function (req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function (dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for getting all Articles from the db
app.get("/articles/id", function (req, res) {
  // Grab every document in the Articles collection
  var id = req.params.id;


  db.Articles.find( { _id: ObjectId(req.params.id) } )


  db.Article.find({

  })
    .then(function (dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// // Route for getting all Articles from the db
app.get("/saved", function (req, res) {
  //   // Grab every document in the Articles collection

  res.sendFile(path.join(__dirname, "Public/saved.html"));
});


app.get("/", function (req, res) {
  //   // Grab every document in the Articles collection

  res.sendFile(path.join(__dirname, "Public/index.html"));
});

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
