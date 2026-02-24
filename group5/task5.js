/*
Assignment 1
*/

let userName = "Elzero";

// Solution 1
console.log(userName[0].toLowerCase()); // e

// Solution 2
console.log(userName.charAt(0).toLowerCase()); // e

// Solution 3
console.log(userName.slice(0, 1).toLowerCase()); // e

// Solution 4
console.log(userName.substring(0, 1).toLowerCase()); // e

// Solution 5
console.log(userName.substr(0, 1).toLowerCase()); // e

// Solution 6 (repeat 3 times)
console.log(userName[0].toLowerCase().repeat(3)); // eee

///////////////////////////////////////////////////////////////////////
/*
Assignment 2
*/

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

// contains z
console.log(word.toLowerCase().includes(letterZ)); // true

// starts with e
console.log(word.toLowerCase().startsWith(letterE)); // true

// ends with o
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // true