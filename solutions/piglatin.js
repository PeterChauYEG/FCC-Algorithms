// Pig Latin
// https://www.freecodecamp.com/challenges/pig-latin

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()

// Start Code

// function translatePigLatin(str) {
//   return str;
// }

// translatePigLatin("consonant");

function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonantCluster = [['g', 'l']]; // whats are all the consonant clusters
    var startConst;
    
    // split up your String
    var letters = str.split('');
    
    // examine the first letter
    // if word begins with vowel, add 'way' suffix instead of 'ay'
    if (vowels.indexOf(letters[0]) !== -1) {
        letters.push('way');
        return letters.join('');
    }
    
    // take first consonant or consonant cluster
    if (consonantCluster[0].indexOf(letters[0]) === 0 && consonantCluster[0].indexOf(letters[1]) === 1) {
        startConst = letters.splice(0, 2).join('');
        console.log(startConst);
    } else {
        startConst = letters.splice(0, 1);
    }
    
    // move it to the end of the word
    letters.push(startConst);
    // add 'ay' suffix
    letters.push('ay');
    
    return letters.join('');
}

// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("eight"));