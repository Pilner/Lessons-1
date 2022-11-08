// SETUP
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

// ROUTE
app.get("/", function(req, res) {
	res.render("home");
})
app.get("/friends", function(req, res) {
	res.render("friends", {friends: friends});
})


// POST
app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend;
	console.log(newFriend + " has been added.");
	friends.push(newFriend);
	res.redirect("/friends")
})


// LISTEN
app.listen(3000, function() {
	console.log("Server listening on port 3000");
})