// creating array with literals
let letters = ["aaa", "bbb", "ccc", "ddd", "eee"];
console.log(letters);

// creating an array by array constructor
let numbers = new Array(111, 222, 333, 444, 555);
console.log(numbers);

// array with mixed types
let mixString = [1, "one", 2.5, { firstname: "aaa", lastname: "bbb" }];
console.log(mixString);

// creating an array using Array.of()
let data = Array.of("one", "two", "three", "four", "five");
console.log(`Original Data: ${data}`);

// creating array using Array.from()
let backupData = Array.from(data);
console.log(`Backup Data: ${backupData}`);

// accessing the arrays
let info = ["one", "two", "three", "four", "five"];
console.log("Accessing the elements of array " + info[3]);
console.log("Accessing the elements of array " + info[1]);

// updating an array element

info[0] = 1;
console.log("after updating the elements of array " + info);

// adding an element
let arr = ["one", "two", "three", "four", "five"];
arr.push("six");
console.log("after pushing element " + arr);

// checking the size of the element
console.log("size of the array: " + arr.length);

// removing an element
let poppedElement = arr.pop();
console.log("after removing element: " + poppedElement);

// shifting the element
let shiftedElement = arr.shift();
console.log("shifted element: " + shiftedElement);

// add/remove the element
let splicedElement = arr.splice(2, 3);
console.log("After splicing: " + splicedElement);

// sorting an array
console.log("Sorted Array:" + arr.sort());

// adding one or more elements
let unshiftElement = arr.unshift("aaa", "bbb");
console.log("after unshiftElement: " + unshiftElement);
