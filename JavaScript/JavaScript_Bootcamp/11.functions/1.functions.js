// creating a function (function with no parameter and no return type)
function greet() {
	var name = "Curious Developers Community";
	console.log("Greetings from: ", name);
}

// calling the function
greet();

// creating a function (function with no parameter and return type)
function newGreet() {
	var name = "Curious Developers Community";
	return name;
}

const displayName = newGreet();
console.log("Display Greetings", displayName);

// creating a function (function with parameter and no return type)
function add(a, b) {
	var a = a;
	var b = b;

	var sum = a + b;
	console.log("The sum is: ", sum);
}

// calling a function
add(10, 20);

// creating a function (function with parameter and return type)
function newAdd(a, b) {
	var a = a;
	var b = b;

	return a + b;
}

// calling a function
const result = newAdd(10, 20);
console.log("The sum is: ", result);

/*
Greetings from:  Curious Developers Community
Display Greetings Curious Developers Community
The sum is:  30
The sum is:  30
*/

// arrow function

let num1 = 100;
let num2 = 200;

let res = (num1, num2) => {
	return num1 + num2;
};

console.log("The sum of num1 and num2: " + res(num1, num2));

// anonymus function
const solution = function (num1, num2) {
	return num1 + num2;
};

console.log("The sum of num1 and num2: " + solution(num1, num2));
