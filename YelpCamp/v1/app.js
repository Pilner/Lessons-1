//SETUP
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// CONTAINER
var campgrounds = [
		{name: "Salmon Creek", image: "https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Granite Hill", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&h=350"},{name: "Salmon Creek", image: "https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Granite Hill", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&h=350"},{name: "Salmon Creek", image: "https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Granite Hill", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&h=350"}
]

//ROUTE
app.get("/", (req, res) => {
	res.render("landing");
})

app.get("/campgrounds", (req, res) => {
	
	res.render("campgrounds", {campgrounds: campgrounds});
});
app.get("/campgrounds/new", (req, res) => {
	res.render("new")
});


//POST
app.post("/campgrounds", (req, res) => {
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds")
});



//LISTEN
app.listen(3000, () => {
	console.log("The YelpCamp Server Has Started!");
})