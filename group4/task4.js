/*
Assignment 1
*/
console.log(1e5); // 100000

console.log(10 ** 5); // 100000

console.log(10000 * 10); // 100000

console.log(200000 / 2); // 100000

console.log(50000 + 50000); // 100000

console.log(100000.0); // 100000

console.log(Number("100000")); // 100000

console.log(parseInt("100000")); // 100000

console.log(Math.pow(10, 5)); // 100000

console.log(Math.round(99999.6)); // 100000

console.log(Math.ceil(99999.1)); // 100000

console.log(Math.floor(100000.9)); // 100000

console.log(+"100000"); // 100000

//////////////////////////////////////////////////////////////////
/*
Assignment 2
*/
console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

//////////////////////////////////////////////////////////////////

/*
Assignment 3
*/

console.log(Number.MAX_SAFE_INTEGER.toString().length);

////////////////////////////////////////////////////////
/*
Assignment 4
*/

let myVar = "100.56789 Views";

// 100 Number
console.log(parseInt(myVar)); // 100

// 100.57 Number
console.log(parseFloat(myVar).toFixed(2) * 1); // 100.57

//////////////////////////////////////////////////////////////
/*
Assignment 5
*/
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

/////////////////////////////////////////////////////////////
/*
Assignment 6
*/
let flt = 10.4;

console.log(Math.floor(flt)); // 10

console.log(parseInt(flt)); // 10

console.log(Math.trunc(flt)); // 10

console.log(Math.round(flt)); // 10

console.log(+flt.toFixed(0)); // 10

/////////////////////////////////////////////////////////////////

/*
Assignment 7
*/
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4