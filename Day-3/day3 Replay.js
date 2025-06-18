//  1. deepClone(obj)
// Write a function that deeply clones an object/array, not just the top level.
function deepClone(obj) {
  // handle perimitive and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // handle array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // handle object
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// 🧠 2. flattenArray(arr)
// Write a function that flattens deeply nested arrays into one flat array.
function flattenArray(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item)); // Recursively flatten nested arrays
    } else {
      result.push(item); // Add
    }
  });
  return result;
}

// 🧠 3. isPalindrome(str)
// Check if a string is a palindrome, ignoring case and non-alphanumeric characters.

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters and convert to lowercase

  const reversedStr = cleanedStr.split("").reverse().join(""); // Reverse the cleaned string

    return cleanedStr === reversedStr; // Check if the cleaned string is equal to its reverse
}
console.log(isPalindrome("A man, a plan, a canal: Panama") ("race a car")); // true
isPalindrome("race a car"); // false
