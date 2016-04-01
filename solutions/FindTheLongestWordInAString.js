function findLongestWord(str) { // https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

  str = str.split(" ").map(function( ele ){ return ele.length; });

  return str.reduce(function(prev, cur){ return Math.max(prev, cur); });

}

console.log( findLongestWord("The quick brown fox jumped over the lazy dog") );
