/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = (instructors) => {
    // Put your solution here
    // console.log(instructors[0].name.length);
    let nameLength = 0;
    let indexResult = 0;

    instructors.map((element, index)=>{
      if(element.name.length > nameLength){
        nameLength = element.name.length
        indexResult = index;
      }
    })
    return ("The instructor with the longest name is", instructors[indexResult])

  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "Mobile"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ])); //{name: "Jeremiah", course: "Web"}
  
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "Mobile"},
    {name: "Domascus", course: "Web"}
  ])); //{name: "Domascus", course: "Web"}