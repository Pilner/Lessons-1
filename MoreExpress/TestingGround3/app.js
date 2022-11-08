// Setup
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Container
var chatList = [];


// Routes
app.get("/", (req, res) => {
	res.render("home", {chatList: chatList});
})

// Post
app.post("/createChat", (req, res) => {
	res.redirect("/")
	var name = req.body.name;
	var chat = req.body.chat;
	
	chatList.push({name, chat});
	
})

// Listen
app.listen(3000, () => {
	console.log("Starting on port 3000");
	
})