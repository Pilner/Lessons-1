var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://photosforclass.com/download/px_699558",
		description: "blah blah blah"
	},
	{
		name: "Desert Mesa",
		image: "https://photosforclass.com/download/px_803226",
		description: "blah blah blah"
	},
	{
		name: "Canyon Floor",
		image: "https://photosforclass.com/download/pb_4817872",
		description: "blah blah blah"
	},
]


function seedDB() {
	//remove all campgrounds
	Campground.remove({}, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("removed campgrounds!");
		//add a few campgrounds
		data.forEach((seed) => {
			Campground.create(seed, (err, campground) => {
				if (err) {
					console.log(err);
				} else {
					console.log("added a campground");
					//create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						}, (err, comment) => {
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment");
							}
						})
				}
			});
		})
	});
	
	//add a few comments
};

module.exports = seedDB;