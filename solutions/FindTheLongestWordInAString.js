function findLongestWord(str) { // https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

  str = str.split(" ").map(function( ele ){ return ele.length; });

  return str.reduce(function(prev, cur){ return Math.max(prev, cur); });

}

console.log( findLongestWord("The quick brown fox jumped over the lazy dog") );


//Solution Two - 'Create an array for each word and loop through using a counter to find the highest letter count' - (David Harrison)

function findLongestWord(str) {
  var wordArray = str.split(" ");
  var highestCount = 0;
  
  for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > highestCount) {
          highestCount = wordArray[i].length;
      }
  }
  return highestCount;
 }

findLongestWord("The quick brown fox jumped over the lazy dog");
