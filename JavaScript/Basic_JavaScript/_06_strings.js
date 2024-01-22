// string interpolation
let company = "Curious Ecosystem";
let displayName = `Our Company is ${company}`;
console.log(displayName);

// string methods

let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let newData = "1234567890";

console.log("Length Of String", data.length);
console.log("Accessing the character", data.charAt(7));
console.log("Accessing the character", data.charCodeAt(7));
console.log("Accessing the position", data.indexOf("A"));
console.log("Accessing the position", data.lastIndexOf("C"));
console.log("Concatenating", data.concat(newData));
console.log("Checking ends with", data.endsWith("Z"));
console.log("Checking starts with ", data.startsWith("Z"));
console.log("Checking string contains", data.includes("ABC"));
console.log("Comparing string ", data.localeCompare(newData));
console.log("Matching string", data.match("ABC"));
console.log("Repeating the characters ", data.repeat(3));
console.log(
	"Replacing the data",
	data.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCD")
);
console.log("Searching  for the data ", data.search("C"));
console.log(
	"Sllicing the data ",
	data.slice(10),
	"After slicing the characters",
	data
);

const info = "A B C D";
console.log("Splitting the data ", info.split(" "));

console.log(
	"Getting substring  from a start index (position)",
	data.substr(0, 3)
);
console.log(
	"Getting substring from 2 specified positions",
	data.substring(2, 3)
);

console.log(
	"Case conversion using the host's locale",
	data.toLocaleLowerCase()
);
console.log(
	"Case conversion using the host's locale",
	data.toLocaleUpperCase()
);

console.log("Case conversion", data.toLowerCase());
console.log("Case conversion", data.toUpperCase());

let num = 123456;
console.log("Converting to string ", num.toString());

const newInfo = " A B C D ";
console.log("Trimming the data", info.trim());
console.log("Trimming the data", info.trimStart());
console.log("Triming the data", info.trimEnd());

console.log("Getting the primitive", info.valueOf("A"));

/*
Output

Our Company is Curious Ecosystem
Length Of String 26
Accessing the character H
Accessing the character 72
Accessing the position 0
Accessing the position 2
Concatenating ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
Checking ends with true
Checking starts with  false
Checking string contains true
Comparing string  1
Matching string [
  'ABC',
  index: 0,
  input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  groups: undefined
]
Repeating the characters  ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ
Replacing the data ABCD
Searching  for the data  2
Sllicing the data  KLMNOPQRSTUVWXYZ After slicing the characters ABCDEFGHIJKLMNOPQRSTUVWXYZ
Splitting the data  [ 'A', 'B', 'C', 'D' ]
Getting substring  from a start index (position) ABC
Getting substring from 2 specified positions C
Case conversion using the host's locale abcdefghijklmnopqrstuvwxyz
Case conversion using the host's locale ABCDEFGHIJKLMNOPQRSTUVWXYZ
Case conversion abcdefghijklmnopqrstuvwxyz
Case conversion ABCDEFGHIJKLMNOPQRSTUVWXYZ
Converting to string  123456
Trimming the data A B C D
Trimming the data A B C D
Triming the data A B C D
Getting the primitive A B C D
*/
