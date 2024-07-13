// Exercise 24

// Tests for equality and inequality with strings
let string1: string = "hello";
let string2: string = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
let str1: string = "HELLO";
let str2: string = "hello";
console.log(str1.toLowerCase() === str2); // True

// Numerical tests
let num1: number = 5;
let num2: number = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
let condition1: boolean = true;
let condition2: boolean = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True

// Test whether an item is in an array
let array: number[] = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True

// Test whether an item is not in an array
console.log(!array.includes(6)); // True
