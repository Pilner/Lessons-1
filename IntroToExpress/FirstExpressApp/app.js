var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	console.log("SOMEONE MADE A REQUEST TO HOME!");
	res.send("Welcome");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	console.log("SOMEONE MADE A REQUEST TO BYE!");
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("SOMEONE MADE A REQUEST TO /DOG!");
	res.send("MEOW!");
})


app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
	console.log(req.params);
	res.send("this is the title of the id of the comment of the subredditName");
})


app.get("*", function(req, res) {
	console.log("SOMEONE MADE A REQUEST TO A RANDOM URL!")
	res.send("YOU ARE A STAR!")
})

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server listening on port 3000");
});