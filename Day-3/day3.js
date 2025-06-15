function vowelsCounter (str){
    let count = 0;
    newStr = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
for(let i= 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      count++;
    }
  }
  return count;
};
console.log(vowelsCounter("Hello World!")); 