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
