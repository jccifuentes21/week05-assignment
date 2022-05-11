/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = (input) => {
  // Your code here
  let byWordsArr = input.split(" ");
  let byLetterArr = [];
  let resultString = "";

  for(let i=0; i<byWordsArr.length; i++){
    if(i>0){
      byLetterArr = byWordsArr[i].split("");
      byLetterArr[0] = byLetterArr[0].toUpperCase();
      resultString += byLetterArr.join("")

    } else resultString += byWordsArr[i]
  }

  return resultString;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

