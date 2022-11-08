var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index")
})

app.listen(3000, () => {
	console.log("starting on port 3000");
})