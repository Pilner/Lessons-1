var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo",
{useNewUrlParser: true, useUnifiedTopology: true});

// Post - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

// User - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
// 	email: "hermione@hogwards.edu",
// 	name: "Hermione Granger"
// });

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Just kidding. Go to potions class to learn it!"
// });

// newUser.save((err, user) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });


// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious"
// });
// newPost.save((err, post) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });


User.findOne({name: "Hermione Granger"}, (err, user)=> {
	if (err) {
		// console.log(err);
	} else {
		user.posts.push({
			title: "3 things I really hate",
			content: "Voldemort. Voldemort. Voldemort"
		});
		user.save((err, user) => {
			if (err) {
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});