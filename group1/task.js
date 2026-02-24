/*
Assignment 1

Code One will NOT work.

Reason:
Because the script runs before the HTML element with id="el" is created.
The browser reads the HTML from top to bottom
and document.getElementById("el") returns null, and the style cannot be applied.

Code Two works because it uses window.onload, which waits until the entire page
loads before executing the code.

Code Three works because it runs after the element is already created in the body.
*/

//////////////////////////////////////////////////////////////////////////
/*
Assignment 2
*/

let element = document.createElement("h1");

let text = document.createTextNode("Elzero");

element.appendChild(text);

element.style.color = "blue";
element.style.fontSize = "80px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.style.fontFamily = "Arial";

document.body.appendChild(element);
/////////////////////////////////////////////////////////////////////////
/*
Assignment 3
*/
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: blue; font-size: 40px;"
);
///////////////////////////////////////////////////////////////////////////
/*
Assignment 4
*/
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

console.groupEnd();

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
/////////////////////////////////////////////////////////////////////////
/*
Assignment 5
*/
console.table([
  "Elzero",
  "Ahmed",
  "Sameh",
  "Gamal",
  "Aya"
]);
/////////////////////////////////////////////////////////////////////////
/*
Assignment 6
*/
console.log("Iam In Console");
document.write("Iam In Page");

// Method 1
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

// Method 2
(function(){
  return;
  console.log("Iam In Console");
  document.write("Iam In Page");
})();

