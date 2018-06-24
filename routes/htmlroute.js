// // ===============================================================================
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// // ===============================================================================
var path = require("path");

// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content
//   // ---------------------------------------------------------------------------



module.exports = function (app) {
    app.get("/saved", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/saved.html"));
    });

    //   // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

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
}
