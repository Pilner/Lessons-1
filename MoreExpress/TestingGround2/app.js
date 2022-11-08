// SCRAPPED!!! CAN'T SEEM TO FIGURE OUT WHY GETTING IP ADDRESS RETURNS '::ffff:172.17.0.1' - line 27

// SETUP
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");

// CONTAINER

var chatInfo = {}

// ROUTE
app.get("/", function(req, res) {
	res.render("home")
})
app.get("/chat", function(req, res) {
	res.render("chat", {chatInfo: chatInfo});
})

// POST
app.post("/addname", function(req, res) {
	var ip = req.connection.remoteAddress;
	chatInfo[ip] = {name: req.body.newname};
	console.log(chatInfo);
	console.log(Object.keys(chatInfo).length);
	res.redirect("/chat");
})

app.post("/newchat", function(req, res) {
	res.redirect("/chat");
})

// LISTEN
app.listen(3000, function() {
	console.log("Server listening on port 3000")
})