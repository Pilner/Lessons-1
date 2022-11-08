//SETUP
var express 	= require("express"),
	app 		= express(),
	bodyParser	= require("body-parser"),
	mongoose 	= require("mongoose"),
	Campground	= require("./models/campground"),
	seedDB		= require("./seeds")

mongoose.connect("mongodb://localhost:27017/yelp_camp_v4", {useNewUrlParser: true, useUnifiedTopology: true});
seedDB();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//ROUTE
app.get("/", (req, res) => {
	res.render("landing");
})
// INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
	// Get all campgrounds from DB
	Campground.find({}, (err, allCampgrounds) => {
		if (err) {
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
			
		}
	})
});
//NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
	res.render("campgrounds/new")
});


//POST
	//CREATE - add new campground to DB
app.post("/campgrounds", (req, res) => {
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	// Create a new campground and save to DB
	Campground.create(newCampground, (err, newlyCreated) => {
		if(err) {
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("/campgrounds")
		}
	})
});

//SHOW - shows more info about a campground
app.get("/campgrounds/:id", (req, res) => {
	//find the campground with provided id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
		if(err) {
			console.log(err);
		} else {
			//render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
	
})

// Comments Routes

app.get("/campgrounds/:id/comments/new", (req, res) => {
	//find campground by id
	Campground.findById(req.params.id, (err, campground) => {
		if (err) {
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	})
})



//LISTEN
app.listen(3000, () => {
	console.log("The YelpCamp Server Has Started!");
})