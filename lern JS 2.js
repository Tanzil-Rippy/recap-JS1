const age = 16;

const arr = [1, 2, 3, 4, 5];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isAdult = (age) => {
  if (age >= 18) {
    return "true";
  } else {
    return "false";
  }
};
console.log (isAdult(age));


const biggestNumber = (arr) => {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}
console.log(biggestNumber(arr));

const vowelsCounter = (str,vowels) {
    const lowStr = str.lowerCase();
if(lowStr.includes(vowels)) {
    let count = 0;
    for (let char of lowStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
}
