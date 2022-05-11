/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = (data) => {
    // Put your solution here
    let dataArr = data.split("");
    let vowels = 0;

    for (let i=0; i<dataArr.length; i++){
      if(dataArr[i] == "a" || dataArr[i] =="e" || dataArr[i] == "i" || dataArr[i] == "o" || dataArr[i] == "u"){
        vowels += 1;
      }
    }

    return vowels;
  };
  
  console.log(numberOfVowels("orange")); // 3
  console.log(numberOfVowels("cornerstone college")); // 7
  console.log(numberOfVowels("aeiou")); // 5