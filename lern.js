// part 2 > task 1 
const name = "Alpha";
let age = 23;
let isDeveloper = true;
let favoriteFood = "mango";
const x = 10;
const y = 20;
const z = 30;

const city = ["New York", "Los Angeles", "Chicago"];

// part 2 > task 2
// a. A function that takes a name and returns: "Hello, NAME!"
function greet(n) {
    return `Hello, ${n}!`;
}
console.log(greet(name)); 
// b
function total(x,y,z){
    return x + y + z;
}
console.log(total(x, y, z));
// c
function reverseString(str){
    return str.split('').reverse().join('');
};
console.log(reverseString("hello"));

// d..
function isEven(num) {
 const result = num % 2 === 0;
 return result ? "Even" : "Od";
}
console.log(isEven(age)); 

// 3
const student = {
    name: "John",
    age: 20,
    Skills: ["JavaScript", "Python", "Java"],
greet : function greets (){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
student.greet();

// p3
function isPalindrome(str) {
     const reversed = str.split('').reverse().join('');
     return str === reversed ? "Yes" : "No";
}
console.log(isPalindrome("helol")); 
