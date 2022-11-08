// SETUP
var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

// ROUTE
app.get("/", (req, res) => {
	res.render("search");
})

app.get("/results", (req, res) => {
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
	request(url, (err, response, body) => {
		if (!err && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data: data});
		};
	});
});

// POST

// LISTEN
app.listen(3000, () => {
	console.log("Movie app has started")
})
