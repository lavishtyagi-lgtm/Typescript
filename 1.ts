// This TypeScript version uses Node.js standard input/output handling

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


import * as readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function palindrome(num:number):number[]{
    const result:number[] = [];

    while(num > 0){
        let reminder:number = num%10;
        result.push(reminder);
        num = Math.floor(num/10);
    }
    return result;
}



rl.question("Enter a number:", (answer: string) => {
    const val = parseInt(answer.trim())
  let value:number = val;
  if (isNaN(value)) {
    console.log("Please enter a valid number.");
    rl.close();
    return;
  } 
  
  const ans:number[] = palindrome(value);
  for(let i = 0 ; i<ans.length ; i++){
    if(ans[i] === ans[ans.length-i-1]){
        continue;
    }
    else{
        console.log(`It is not a palindrom number ${val}`);
        rl.close();
        return;
    }
  }
  console.log(`It is a Palindrom number ${val}`)
  rl.close();
})