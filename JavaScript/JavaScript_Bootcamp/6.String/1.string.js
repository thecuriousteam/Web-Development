// string interpolation

// single quote string
const singleQuotes = "This is a string using single quote";

// double quote string
const doubleQuotes = "This is a string using double quote";

// string constructor
const constructor = new String("Sting created using constructor");

// using string literals
const stringLiterals = "String Literals Data";

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(constructor);
console.log(
	`This is the string created using template literals ${stringLiterals}`
);

// expression evaluation
const a = 10;
const b = 0.5;
const total = `The total price is: ${a * (1 + b)}`;
console.log(total);
