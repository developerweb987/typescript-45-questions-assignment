// Exercise 24
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lower case function
var str1 = "HELLO";
var str2 = "hello";
console.log(str1.toLowerCase() === str2); // True
// Numerical tests
var num1 = 5;
var num2 = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
// Test whether an item is not in an array
console.log(!array.includes(6)); // True
