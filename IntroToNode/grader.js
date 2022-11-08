function average(arr) {
	var result = 0;
	
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	
	result /= arr.length;
	
	return Math.round(result);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("Average scores for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68