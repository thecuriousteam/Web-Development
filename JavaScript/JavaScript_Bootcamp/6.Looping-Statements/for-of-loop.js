const numbers = [100, 200, 300, 400, 500];

// function
function display(element) {
	console.log(element);
}
numbers.forEach(display);

// another way
for (let i in numbers) {
	console.log(numbers[i]);
}

// another way
for (let i = 0; i <= numbers.length - 1; i++) {
	console.log(i + " , " + numbers[i]);
}
