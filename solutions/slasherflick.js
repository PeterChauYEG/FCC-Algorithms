// Slasher Flick
// https://www.freecodecamp.com/challenges/slasher-flick#?solution=%0Afunction%20slasher(arr%2C%20howMany)%20%7B%0A%20%20%2F%2F%20it%20doesn't%20always%20pay%20to%20be%20first%0A%20%20return%20arr%3B%0A%7D%0A%0Aslasher(%5B1%2C%202%2C%203%5D%2C%202)%3B%0A

// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Array.slice()
// Array.splice()

// function slasher(arr, howMany) {
//   // it doesn't always pay to be first
//   return arr;
// }

// slasher([1, 2, 3], 2);

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  
  return arr;
}

console.log(slasher([1, 2, 3], 2));
