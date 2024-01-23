const person = { name: "John", age: 30, job: "developer" };

for (let key in person) {
	console.log(`key ${key} => value ${person[key]}`);
}

// printing keys
console.log("Printing Keys: ");
for (let key in person) {
	console.log(key);
}

// printing values
console.log("Printing Values: ");
for (let value in person) {
	console.log(person[value]);
}
