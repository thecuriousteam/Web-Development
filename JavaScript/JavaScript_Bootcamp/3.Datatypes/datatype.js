/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

let name = "Curious Developers Community"; //string
let count = 25000; //int
let isProdut = true; //boolean

// object
const fullName = { firstName: "Curious", lastName: "Community" };

// array
const info = ["aaa", "bbb", "ccc"];

// date
const today = new Date("2023-12-27");

console.log(
	"String type - ",
	name,
	"\nint type - ",
	count,
	"\nboolean type - ",
	isProdut,
	"\nobject type - ",
	fullName,
	"\narray type - ",
	info,
	"\ndate type - ",
	today
);

/*
Output
=============================================================
String type -  Curious Developers Community 
int type -  25000
boolean type -  true
object type -  { firstName: 'Curious', lastName: 'Community' }
array type -  [ 'aaa', 'bbb', 'ccc' ]
date type -  2023-12-01T00:00:00.000Z
*/
