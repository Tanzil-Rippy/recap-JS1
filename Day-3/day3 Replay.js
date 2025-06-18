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
