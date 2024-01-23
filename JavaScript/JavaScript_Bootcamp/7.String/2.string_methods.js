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
