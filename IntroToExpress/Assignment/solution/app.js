// SETUP
var express = require("express");
var app = express();

// ROUTE
app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
})

// app.get("/speak/pig", function(req, res) {
// 	res.send("The pig says 'Oink'");
// })
// app.get("/speak/cow", function(req, res) {
// 	res.send("The cow says 'Moo'");
// })
// app.get("/speak/dog", function(req, res) {
// 	res.send("The dog says 'Woof Woof!'");
// })

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof",
		cat: "I hate you human",
		goldfish: "..."
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	
	res.send("The " + animal + " says '"  + sound + "'");
})

app.get("/repeat/:str/:num", function(req, res) {
	var str = req.params.str;
	var num = Number(req.params.num);
	var result = "";
	
	for (var i = 0; i < num; i ++) {
		result += str + " ";
	}
	
	res.send(result);
})

app.get("*", function(req, res) {
	res.send("Sorry, page not found... What are you doing with your life?");
})



// LISTEN
app.listen(3000, function() {
	console.log("Server starting in port 3000");
})