/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = (date) => {
  // Your code here
  let dateArr = date.split("/");
  let humanDate = "";

  switch (dateArr[1]){
    case "01":
      humanDate += "January "
      break
    case "02":
      humanDate += "February "
      break
    case "03":
      humanDate += "March "
      break
    case "04":
      humanDate += "April "
      break
    case "05":
      humanDate += "May "
      break
    case "06":
      humanDate += "June "
      break
    case "07":
      humanDate += "July "
      break
    case "08":
      humanDate += "August "
      break
    case "09":
      humanDate += "September "
      break
    case "10":
      humanDate += "October "
      break
    case "11":
      humanDate += "November "
      break
    case "12":
      humanDate += "December "
      break
  }

  if (dateArr[2].startsWith("0")){
    humanDate += dateArr[2].slice(1)
  } else humanDate += dateArr[2]
  
  if (dateArr[2].endsWith("1") && !dateArr[2].startsWith("1") ){
    humanDate += "st,"
  } else if (dateArr[2].endsWith("2")){
    humanDate += "nd,"
  } else if (dateArr[2].endsWith("3")){
    humanDate += "rd,"
  } else{
    humanDate += "th,"
  }

  humanDate += ` ${dateArr[0]}`
  return humanDate

};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/31")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
console.log(talkingCalendar("1997/10/21")); // August 24th, 1987
