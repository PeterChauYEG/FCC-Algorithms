// Where do I belong
// https://www.freecodecamp.com/challenges/where-do-i-belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Starter code
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   return num;
// }

// getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // 1. **Sort** the first argument (_array_) from lowest to highest
  arr.sort( ( a, b ) => { return a - b; } );
  
  // 2. **Compare** the second argument with each element of the sorted array:
  var index = []; // array
  var i = 0; // number and we are gonna initialize it.
  
  // a. Is any element larger than it? Add 1 to the length of the array.
  if ( num > arr[arr.length-1]) { return arr.length; }
  
  for ( var e in arr ) {
    // b. Is the element is greater than or equal to it? Remember the index
    if ( arr[e] >= num ) {
      // there can be many elements that pass. Lets just hold on them all. Optimize later.
      index[i] = e;
      i++;
    }
  }
  
  // 3. **Return** the index
  return Number( index[0] );
}

// we are logging so we can see the result. 
// just use 
// getIndexToIns([40, 60], 50);
// when you test it on Free Code Camp
console.log(getIndexToIns([40, 60], 50));