const numbers = [1, 2, 3, 4, 5];

// .map with normal function
const sqNum = function (num) {
	return num * num;
};
console.log("Way - 1: " + numbers.map(sqNum));

// alternative way
const sqNumRes = numbers.map(function (num) {
	return num * num;
});
console.log("Way - 2: " + sqNumRes);

// .map with arrow function
const res = numbers.map((num) => num * num);
console.log("Way - 3: " + res);

// .map example

const data = [1, 2, 3, 4, 5];

// const info = data.map((inputNum) => inputNum + inputNum);
// console.log(info);

const info = function (inputNum) {
	return inputNum + inputNum;
};

console.log("Doubled Data In An Array: " + data.map(info));
