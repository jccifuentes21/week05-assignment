/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = (data) =>{
    // Put your solution here
    let firstNum = 0;
    let secondNum = 0;

    for (let i=0; i<data.length; i++){
        if (data[i] > firstNum){
            firstNum = data[i];
        }
    }

    for (let i=0; i<data.length; i++){
        if (data[i] > secondNum &&  data[i] != firstNum){
            secondNum = data[i];
        }
    }

    return firstNum + secondNum;

};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126