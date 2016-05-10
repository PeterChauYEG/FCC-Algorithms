// Pig Latin
// https://www.freecodecamp.com/challenges/pig-latin

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.


//
// I enjoy making one line solutions to code problems as
// an exercise. The solution below is considered to be one line
// because the function consists of only a return statement
//

//
// Note, the jshint comment below must be included when using this solution on FCC in order for the () => {} function syntax to work 

/*jshint esversion: 6 */
function translatePigLatin(str) {

  return 'aeiou'.includes(str[0]) ? str+'way' : str.split('').slice(str.split('').findIndex((e) => 'aeiou'.indexOf(e) != -1 )).join('') + str.split('').slice(0, str.split('').findIndex((e) => 'aeiou'.indexOf(e) != -1 )).join('') + 'ay';

}


// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("eight"));
