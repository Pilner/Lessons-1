var faker = require("faker")

console.log("=====================");
console.log("WELCOME TO MY SHOP!");
console.log("=====================");


for (var i = 0; i < 10; i ++) {
	var price = faker.commerce.price();
	var productName = faker.commerce.productName();
	
	console.log(productName + " - $" + price);
}