const numbers = [1, 2, 3, 4, 5];

// forming sum of array

const sum = numbers.reduce(
	(initialValue, currentValue) => initialValue + currentValue,
	0
)

console.log("The Sum of array is: "+sum);
