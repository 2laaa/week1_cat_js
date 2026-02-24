/*
Assignment 1
*/

console.log(10 * 20 * 15 * 3 * 190 * 10 * 400 - 10 * 20 * 15 * 3 * 190 * 10 * 400);

/////////////////////////////////////////////////////////////////////////////////////
/*
Assignment 2
*/
let num1 = 3;

// Solution One
console.log(num1 + num1); // 6

// Solution Two
console.log(num1 * true + num1 * true); // 6

// Solution Three
console.log(num1 << true); // 6

// Solution Four
console.log(++num1 + --num1); // 6

// Solution Five
console.log(num1 * (true + true)); // 6

// Solution Six
console.log(num1 + Number(true) + Number(true) + Number(true)); // 6

////////////////////////////////////////////////////////////////////////

/*
Assignment 3
*/
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(Number(num2) + Number(num2)); // 20

// Solution Three
console.log(parseInt(num2) + parseInt(num2)); // 20

// Solution Four
console.log(num2 * true + num2 * true); // 20

// Solution Five
console.log(num2 / true + num2 / true); // 20

//////////////////////////////////////////////////////

/*
Assignment 4
*/
let points = 10;

// add 3
points += true + true + true;

console.log(points); // 13

// subtract 5
points -= true + true + true + true + true;

console.log(points); // 8