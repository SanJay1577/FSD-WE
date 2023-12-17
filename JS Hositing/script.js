//hoisting
// reassiging and initialization is possible
//var
var val = 15;
console.log(val);
var val = 30;
console.log(val);
val = 45;
console.log(val);

//let
// reassigment doable but no re initialization
let val1 = 25;
//let val1 = 30; //error
val1 = 76;
console.log(val1);

//const
// no renialization and reassignment
const val2 = 35;
//const val2 = 45  -> error
//val2 = 45; // -> type error
console.log(val2);

//const in objects
const arr = [1, 2, 3];
console.log(arr);
arr[2] = 5;
console.log(arr);

console.log(a);
var a = 15;
console.log(a);

//console.log(b) refernce error
let b = 25;
console.log(b);

// functional hoisting
greetMe();

function greetMe() {
  //   console.log(c);
  //   var c = 35;
  //   console.log(c);
  console.log("hi");
}

//normal function
// function declartion
function aboutMyself() {
  console.log("My name is Sanjay");
  console.log("I'm a FSD mentor in GUVI");
}
aboutMyself();

// with parameters and arguments
//parameters
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// argumenmts
addTwoNumbers(5, 10);
addTwoNumbers(10, 67.8);

// function with return keyword
function getValue() {
  return "any value";
}
getValue(); // = 10;
let value = getValue();
console.log(value);
//function mul
function mul(n1, n2) {
  return n1 * n2;
}

let answer1 = mul(5, 10);
let answer2 = mul(6.7, 0.6);
console.log(answer1);
console.log(answer2);

//arrow function

function sum(num1, num2) {
  return num1 + num2;
}
let ans1 = sum(7, 67);

//multiline
const arrSum = (num1, num2) => {
  const value = num1 + num2;
  return value;
};

//single line
//const arrSum = (num1, num2) => num1 + num2;
//arrSum(7, 67) = 74
//let ans2 = 74

let ans2 = arrSum(7, 67);
console.log("normal function", ans1);
console.log("arrow function", ans2);

// anonoumus function:
function fnName() {
  console.log("function works");
}

let anousFunc = function () {
  console.log("function works in anonoumous");
};

anousFunc();

//IIFE
//Immeidatly invoked function
(function () {
  console.log("Immmediatly Invoked function");
})();

// loggers
const l = (value) => console.log(value);
l("sanjay");
l(6 + 9);
