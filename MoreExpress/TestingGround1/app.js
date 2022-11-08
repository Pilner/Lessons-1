// SETUP
var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


var friendslist = [];

// ROUTE
app.get("/", function(req, res) {
	console.log(req.ip + ": " + "has accessed the site!")
	res.render("home");
})
app.get("/friends", function(req, res) {
	console.log(req.ip + ": " + "pressed the button!")
	res.render("friends", {friendslist: friendslist});
})


// POST
app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend;
	friendslist.push(newFriend);
	console.log(req.ip + ": " + newFriend + " has been added.");
	res.redirect("/friends");
})

// DELETE
for (friend of friendslist) {
	this.addEventListener("click", (e) => {
		e.remove();
	})
}



// LISTEN
app.listen(3000, function() {
	console.log("Server listening on port 3000!");
})