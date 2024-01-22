// creating array with literals
let letters = ["aaa", "bbb", "ccc", "ddd", "eee"];
console.log(letters);

// creating an array by array constructor
let numbers = new Array(111, 222, 333, 444, 555);
console.log(numbers);

let newArray = letters.concat(numbers);
console.log("After concat() the array is: "+newArray);

// filtering the data
const number = [111, 222, 333, 444, 555];
function checkNumber(number) {
  return number > 333
}
const result = number.filter(checkNumber)
console.log("After filter(): "+result)

// finding the data
console.log("Return the first element that satisfy the condition: "+number.find(checkNumber))