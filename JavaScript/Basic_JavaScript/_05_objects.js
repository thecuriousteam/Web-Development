// javascript objects

const person = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
};

// Accessing Object Properties
console.log(person.firstName);
console.log(person["firstName"]);

// Object Methods -> objects with methods defined in it
// object creation
// 1. object literals
const empObject = {
	firstName: "ABC",
	lastName: "DEF",
	role: "developer",
	greet: function () {
		console.log(
			"Hello, welcome",
			this.firstName,
			this.lastName,
			"your role is",
			this.role
		);
	},
};

empObject.greet();

/*
Hello, welcome ABC DEF your role is developer
*/

// 2. object constructor

function newPerson(firstName, lastName, role) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.role = role;
	this.greet = function () {
		console.log(
			"Hello, welcome",
			this.firstName,
			this.lastName,
			"your role is",
			this.role
		);
	};
}

const p1 = new newPerson("aaa", "bbb", "developer");
p1.greet();

/*
Hello, welcome aaa bbb your role is developer
*/
