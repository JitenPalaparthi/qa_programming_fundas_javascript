greet = "Hello World"; // greet is a variable holding string value
console.log(greet);

var a = 10;
var b = 20;

console.log("Type of A and B:", typeof a,typeof b);

console.log("Addition of a and b:"+(a+b));

var a = 10.45; // Javascript does not have any float, decimal or double.. all numeric values belong to number datatype
var b = 20.68;

console.log("Type of A and B:", typeof a,typeof b); 

console.log("Addition of a and b:"+(a+b));

a = "10";
b = "20";

console.log("Type of A and B:", typeof a,typeof b);

console.log("Addition of a and b:"+(a+b));

a = false;
b = true;

console.log("Type of A and B:", typeof a,typeof b);

console.log("Addition of a and b:"+(a+b));

let p = 100;
let q = 200;

console.log("Addition of p and q:",(p+q));
console.log("Type of p and q:", typeof p, typeof q);
{ // if you remove this scope p has an error. 
//Because when you use let while declaring a variable , it cannot be redeclared with the same name in the same scope
let p = "Hello ";
let q = "Folks";

console.log("Addition of p and q:",(p+q));
console.log("Type of p and q:", typeof p, typeof q);
}
const another_greet = "Hello World";

console.log(another_greet);
console.log("Type of another greet:",typeof another_greet);
// uncomment below two lines to check
// another_greet = "Hello Universe"; // only this line has an error. Since it is interpreted programming language
// console.log("Type of another greet:",typeof another_greet);
// it triggers the error while executing perticular error line in the code.


var k;
let l;

console.log("Type of k and l:",typeof k,typeof l);

k = "100.341"; // This is string type 
l = 100.200; // This is a number type
// To type caste from string to number of float , parseFloat(k);
// To type caste from string to number of int , parseInt(k);

console.log("Addition of k and l",(parseFloat(k)+parseFloat(l)).toFixed(3)); 

// to run this application node demo1.js
// in node can also wrote inline code without writing javascrip in a file 
// but that is usually done for testing some code or to execute some inline stuff
// To do that just type node in the terminal


