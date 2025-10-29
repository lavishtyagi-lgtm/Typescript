"use strict";
// This TypeScript version uses Node.js standard input/output handling
Object.defineProperty(exports, "__esModule", { value: true });
// import * as readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const inputs: number[] = [];
// rl.on("line", (line: string) => {
//   const value = parseInt(line.trim());
//   inputs.push(value);
//   // Once two numbers are read, calculate and print their sum
//   if (inputs.length === 2) {
//     const [a, b] = inputs;
//     const sum = a + b;
//     console.log(sum);
//     rl.close();
//   }
// });
// Read three numbers and print the largest.
// import * as readline from "node:readline";
// // console.log("ESM import works!");
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// const inputs: number[] = [];
// rl.addListener('line' , (line : string) => {
//     const value = parseInt(line.trim());
//     inputs.push(value);
// if(inputs.length === 3){
//     const [a , b , c] = inputs;
//     if(a > b && a>c ){
//         console.log(`the largest number is ${a}`);
//     }
//     if(b > a && b>c ){
//         console.log(`the largest number is ${b}`);
//     }
//     if(c > b && a < c ){
//         console.log(`the largest number is ${c}`);
//     }
//     rl.close();
// }
// Read three numbers and print the largest.
// import * as readline from "node:readline";
// // console.log("ESM import works!");
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// const inputs: number[] = [];
// rl.addListener('line' , (line : string) => {
//     const value = parseInt(line.trim());
//     inputs.push(value);
//     if(inputs.length === 3){
//     const [a , b , c] = inputs;
//       if(a > b && a>c ){
//           console.log(`the largest number is ${a}`);
//       }
//       else if(b > a && b>c ){
//           console.log(`the largest number is ${b}`);
//       }
//       else{
//           console.log(`the largest number is ${c}`);
//       }
//       rl.close();
//     }
// });\
// Check whether a number is even or odd
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// })
// const num : number[] = [];
// rl.on("line" , (line :number) => {
//     // const value = parseInt(line.trim());
//     num.push(line);  
//      if (isNaN(line)) {
//     console.log("Please enter a valid number.");
//     } else {
//     num.push(line);
//     if (line % 2 === 0) {
//       console.log(`${line} is even.`);
//     } else {
//       console.log(`${line} is odd.`);
//     }
//     rl.close(); // Close after one number is processed. Remove if multiple inputs needed.
//   }
// })
// Determine if a year is a leap year.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let year : number ;
// rl.on("line" , (line:string)=>{
//     const value = parseInt(line.trim());
//     year = value;
//     if(isNaN(value)){
//         console.log(`Enter a valid year ${value}`);
//     }else {
//         if(year % 4 === 0){
//             console.log(`This is a Leap year ${year}`);
//         }
//         else{
//             console.log(`this is not a leap year ${year}`);
//         }
//     }
//     rl.close();
// })
// Print the multiplication table of a given number.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// let num : number;
// rl.question("line" , (line : string) => {
//     const value = parseInt(line.trim());
//     num = value;
//     if (isNaN(num)) {
//     console.log("Please enter a valid number");
//     }else{
//        for(let i = 1 ; i <= num ; i++ ){
//            console.log(`${i*num}`);
//        }
//     }
//     rl.close();
// })
// Calculate the factorial of a number using a loop.
// let num : number;
// rl.on("line" , (line:string) => {
//     const value = parseInt(line.trim());
//     num = value;
//     let factorial:number = num;
//     for(let i : number = 1 ; i < num ; i++){
//         factorial = factorial*i;
//         // console.log(`${factorial}`);
//     }
//     console.log(`${factorial}`);
//     rl.close();
// })
// Print the first N Fibonacci numbers.
// function Fibonacci(num: number): number[] {
//     const result:number[]=[];
//     if(num <=0 ){
//         return result;
//     }
//     let a = 0 , b=1;
//     for(let i = 0 ; i<num ; i++){
//         result.push(a);
//         const next = a+b;
//         a = b ;
//         b = next;
//     }
//     return result;
// }
// Reverse a given number
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// function Reverse(num:number):number[]{
//     const result:number[] = [];
//     while(num > 0){
//         let reminder:number = num%10;
//         result.push(reminder);
//         num = Math.floor(num/10);
//     }
//     return result;
// }
// rl.question("Enter a number:", (answer: string) => {
//     const val = parseInt(answer.trim())
//   let value:number = val;
//   if (isNaN(value)) {
//     console.log("Please enter a valid number.");
//     rl.close();
//     return;
//   } 
//   const ans:number[] = Reverse(value);
//    for (let i:number = 0; i < ans.length; i++) {
//     process.stdout.write(ans[i].toString());
//    }
//   rl.close();
// });
// Count the digits in a number.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.on("line" , (line:string) => {
//     let value = parseInt(line.trim());
//     if(isNaN(value)){
//         console.log("Enter the valid number");
//     }
//     else{
//         let cnt = 0;
//         if(value == 0){
//             cnt = 1;
//         }
//         else{
//             while(value > 0){
//                 value =Math.floor(value/10);
//                 cnt++;
//             }
//         }
//         console.log(cnt);
//     }
//     rl.close();
// });
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// function count(num:number):number[]{
//     const result:number[] = [];
//     while(num > 0){
//         let reminder:number = num%10;
//         result.push(reminder);
//         num = Math.floor(num/10);
//     }
//     return result;
// }
// rl.question("Enter a number:", (answer: string) => {
//     const val = parseInt(answer.trim())
//   let value:number = val;
//   if (isNaN(value)) {
//     console.log("Please enter a valid number.");
//     rl.close();
//     return;
//   } 
//   const ans:number[] = count(value);
//   console.log(ans.length);
//   rl.close();
// })
// Check if a number is a palindrome
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// function palindrome(num:number):number[]{
//     const result:number[] = [];
//     while(num > 0){
//         let reminder:number = num%10;
//         result.push(reminder);
//         num = Math.floor(num/10);
//     }
//     return result;
// }
// rl.question("Enter a number:", (answer: string) => {
//     const val = parseInt(answer.trim())
//   let value:number = val;
//   if (isNaN(value)) {
//     console.log("Please enter a valid number.");
//     rl.close();
//     return;
//   } 
//   const ans:number[] = palindrome(value);
//   for(let i = 0 ; i<ans.length ; i++){
//     if(ans[i] === ans[ans.length-i-1]){
//         continue;
//     }
//     else{
//         console.log(`It is not a palindrom number ${val}`);
//         rl.close();
//         return;
//     }
//   }
//   console.log(`It is a Palindrom number ${val}`)
//   rl.close();
// })
// Compute the sum of digits of a number
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// function sum(num:number):number[]{
//     const result:number[] = [];
//     while(num > 0){
//         let reminder:number = num%10;
//         result.push(reminder);
//         num = Math.floor(num/10);
//     }
//     return result;
// }
// rl.question("Enter a number:", (answer: string) => {
//     const val = parseInt(answer.trim())
//   let value:number = val;
//   if (isNaN(value)) {
//     console.log("Please enter a valid number.");
//     rl.close();
//     return;
//   } 
//   const ans:number[] = sum(value);
//   let sum_sum: number = 0;
//   for(let i = 0 ; i<ans.length ; i++){
//    sum_sum += ans[i]; 
//   }
//   console.log(`sum is  ${sum_sum}`)
//   rl.close();
// })
// 1. Find the greatest common divisor (GCD) of two numbers.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
/**
 * Finds the GCD of two numbers using the Euclidean algorithm.
 */
// function findGCD(a: number, b: number): number {
//     // If b is 0, the answer is a.
//     // Otherwise, recursively call with b and the remainder of a / b.
//     if (b === 0) {
//         return a;
//     }
//     return findGCD(b, a % b);
// }
// rl.question("Enter the first number (a): ", (aStr) => {
//     rl.question("Enter the second number (b): ", (bStr) => {
//         const a = parseInt(aStr.trim());
//         const b = parseInt(bStr.trim());
//         if (isNaN(a) || isNaN(b)) {
//             console.log("Please enter valid numbers.");
//         } else {
//             // Ensure numbers are positive for standard GCD
//             const result = findGCD(Math.abs(a), Math.abs(b));
//             console.log(`The GCD of ${a} and ${b} is: ${result}`);
//         }
//         rl.close();
//     });
// });
// 2. Find the least common multiple (LCM) of two numbers.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // We need the GCD function to calculate the LCM
// function findGCD(a: number, b: number): number {
//     if (b === 0) {
//         return a;
//     }
//     return findGCD(b, a % b);
// }
// /**
//  * Finds the LCM of two numbers.
//  */
// function findLCM(a: number, b: number): number {
//     if (a === 0 || b === 0) {
//         return 0; // LCM of 0 and any number is 0
//     }
//     // Formula: LCM = |a * b| / GCD(a, b)
//     return Math.abs(a * b) / findGCD(a, b);
// }
// rl.question("Enter the first number (a): ", (aStr) => {
//     rl.question("Enter the second number (b): ", (bStr) => {
//         const a = parseInt(aStr.trim());
//         const b = parseInt(bStr.trim());
//         if (isNaN(a) || isNaN(b)) {
//             console.log("Please enter valid numbers.");
//         } else {
//             const result = findLCM(a, b);
//             console.log(`The LCM of ${a} and ${b} is: ${result}`);
//         }
//         rl.close();
//     });
// });
// 3. Print all prime numbers between 1 and N.
// import * as readline from "readline";
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Helper function to check if a number is prime.
//  */
// function isPrime(num: number): boolean {
//     if (num <= 1) return false; // 1 and negatives are not prime
//     // Check for divisors from 2 up to the square root of the number
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false; // Found a divisor
//         }
//     }
//     return true; // No divisors found
// }
// /**
//  * Finds all prime numbers up to N.
//  */
// function findPrimesUpTo(N: number): number[] {
//     const primes: number[] = [];
//     for (let i = 2; i <= N; i++) { // Start from 2
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }
// rl.question("Enter a number (N): ", (answer: string) => {
//     const N = parseInt(answer.trim());
//     if (isNaN(N)) {
//         console.log("Please enter a valid number.");
//     } else {
//         const primesList = findPrimesUpTo(N);
//         console.log(`Prime numbers between 1 and ${N}:`);
//         console.log(primesList.join(', '));
//     }
//     rl.close();
// });
// import * as os from "os";
// console.log(os.cpus().length);
// Change this:
// import * as http from "http";
// To this:
// import http = require("http");
// import fs = require("fs");
// const myServer = http.createServer((req , res) => {
//     const log = `${Date.now()} : ${req.url}  New Req Recieved \n`;
//     fs.appendFile('log.txt' , log , (err) =>{
//         console.log(req);
//         if (err) {
//             console.error("Failed to write log:", err);
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end("Server error.");
//             return;
//         }
//         switch (req.url) {
//             case '/': res.end("Hello Home Page ");
//                 break;
//             case '/about': res.end("I am Lavish Tyagi");
//                 break;
//             default:
//                 res.end("404 Not fOUND ");
//                 break;
//         }
//     });
// });
// myServer.listen(8000 ,()=> console.log("Server Strated !"));
// Check if a given number is prime.
// import readline = require('readline');
// const rl1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// function isprime(num:number): boolean {
//     if(num <= 1){
//         return false;
//     }
//     for(let i = 2 ; i*i <=num ; i++){
//         if(num%i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// rl1.addListener('line' , (answer:string) =>{
//     const num = parseInt(answer.trim());
//     if(isNaN(num)){
//         console.log("not valid number");
//     }
//     else{
//         if(isprime(num)){
//             console.log(`${num} is a prime number .`);
//         }
//         else{
//             console.log(`${num} is not a prime number `);
//         }
//     }
//     rl1.close();
// });
// 2. Print the ASCII value of a given character.
// import * as readline from "readline";
// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl2.question("Enter a single character: ", (answer: string) => {
//     const input = answer.trim();
//     if (input.length !== 1) {
//         console.log("Please enter exactly one character.");
//     } else {
//         const char = input[0];
//         const asciiValue = char.charCodeAt(0);
//         console.log(`The ASCII value of '${char}' is ${asciiValue}.`);
//     }
//     rl2.close();
// });
// 3. Convert Celsius temperature to Fahrenheit.
// import * as readline from "readline";
// const rl3 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Converts Celsius to Fahrenheit.
//  */
// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9 / 5) + 32;
// }
// rl3.question("Enter temperature in Celsius: ", (answer: string) => {
//     const celsius = parseFloat(answer.trim());
//     if (isNaN(celsius)) {
//         console.log("Please enter a valid number for the temperature.");
//     } else {
//         const fahrenheit = celsiusToFahrenheit(celsius);
//         console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
//     }
//     rl3.close();
// });
// 4. Compute the power of a number without using built-in functions.
// import * as readline from "readline";
// const rl4 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Computes base^exponent without using Math.pow().
//  * Assumes exponent is a non-negative integer.
//  */
// function power(base: number, exponent: number): number {
//     if (exponent === 0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }
// rl4.question("Enter the base number: ", (baseStr: string) => {
//     rl4.question("Enter the exponent (non-negative integer): ", (expStr: string) => {
//         const base = parseFloat(baseStr.trim());
//         const exponent = parseInt(expStr.trim());
//         if (isNaN(base) || isNaN(exponent)) {
//             console.log("Please enter valid numbers for base and exponent.");
//         } else if (exponent < 0) {
//             console.log("This example only supports non-negative integer exponents.");
//         } else {
//             const result = power(base, exponent);
//             console.log(`${base} raised to the power of ${exponent} is ${result}.`);
//         }
//         rl4.close();
//     });
// });
// 5. Display all factors of a number.
// import * as readline from "readline";
// const rl5 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Finds all factors of a positive integer.
//  */
// function findFactors(num: number): number[] {
//     const factors: number[] = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// }
// rl5.question("Enter a positive integer to find its factors: ", (answer: string) => {
//     const num = parseInt(answer.trim());
//     if (isNaN(num) || num <= 0) {
//         console.log("Please enter a valid positive integer.");
//     } else {
//         const factorsList = findFactors(num);
//         console.log(`The factors of ${num} are: ${factorsList.join(', ')}`);
//     }
//     rl5.close();
// });
// 6. Compute the sum of all even numbers from 1 to N.
// import * as readline from "readline";
// const rl6 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Computes the sum of all even numbers from 1 up to N.
//  */
// function sumOfEvens(N: number): number {
//     let sum = 0;
//     // Start at 2 and increment by 2 for efficiency
//     for (let i = 2; i <= N; i += 2) {
//         sum += i;
//     }
//     return sum;
// }
// rl6.question("Enter a number (N): ", (answer: string) => {
//     const N = parseInt(answer.trim());
//     if (isNaN(N)) {
//         console.log("Please enter a valid number.");
//     } else {
//         const sum = sumOfEvens(N);
//         console.log(`The sum of all even numbers from 1 to ${N} is ${sum}.`);
//     }
//     rl6.close();
// });
// 7. Find the largest element in an array.
// import * as readline from "readline";
// const rl7 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Finds the largest element in an array of numbers.
//  * Returns -Infinity if the array is empty.
//  */
// function findLargest(arr: number[]): number {
//     if (arr.length === 0) {
//         return -Infinity;
//     }
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// rl7.question("Enter numbers separated by commas (e.g., 3,5,1,9): ", (answer: string) => {
//     const numbers = answer.trim().split(',')
//                            .map(item => parseFloat(item.trim()))
//                            .filter(num => !isNaN(num));
//     if (numbers.length === 0) {
//         console.log("No valid numbers were entered.");
//     } else {
//         const largest = findLargest(numbers);
//         console.log(`The array is: [${numbers.join(', ')}]`);
//         console.log(`The largest element is: ${largest}`);
//     }
//     rl7.close();
// });
// 8. Compute the average of elements in an array.
// import * as readline from "readline";
// const rl8 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// /**
//  * Computes the average of elements in an array.
//  * Returns 0 if the array is empty.
//  */
// function calculateAverage(arr: number[]): number {
//     if (arr.length === 0) {
//         return 0;
//     }
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sum / arr.length;
// }
// rl8.question("Enter numbers separated by commas (e.g., 10,20,30): ", (answer: string) => {
//     const numbers = answer.trim().split(',')
//                            .map(item => parseFloat(item.trim()))
//                            .filter(num => !isNaN(num));
//     if (numbers.length === 0) {
//         console.log("No valid numbers were entered.");
//     } else {
//         const average = calculateAverage(numbers);
//         console.log(`The array is: [${numbers.join(', ')}]`);
//         console.log(`The average is: ${average.toFixed(2)}`);
//     }
//     rl8.close();
// });
// 9. Reverse an array in place.
var readline = require("readline");
var rl9 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * Reverses an array in place (modifies the original array).
 */
function reverseArrayInPlace(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        // Swap elements
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        // Move pointers
        left++;
        right--;
    }
}
rl9.question("Enter items separated by commas (e.g., a,b,c,d,e): ", function (answer) {
    var items = answer.trim().split(',');
    console.log("Original array: [".concat(items.join(', '), "]"));
    reverseArrayInPlace(items);
    console.log("Reversed array: [".concat(items.join(', '), "]"));
    rl9.close();
});
