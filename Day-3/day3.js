//  task 1: Count the number of vowels in a string
 function vowelsCounter(str) {
  let count = 0;
  newStr = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelsCounter("Hello World!"));


// task 2: Reverse a string

function reverseString(str) {
  return str.split("").reverse().join('');
}
console.log(reverseString("Hello World!"));

// task 3 : remove duplicates from an array

function removeDub(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);}
 }
 return uniqueArray;
};

// bonus part 
 
function fizzBuzz () {
  for (let i =1 ; i <= 100; i++){
    if(i%3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }else if (i % 3 === 0) {
 console.log("Fizz");
    }else if (i % 5 === 0) {
      console.log("Buzz");
  } 
 } 
 };
console.log(fizzBuzz());


//  day 3 task start here
