function factorialize(num) {  // https://www.freecodecamp.com/challenges/factorialize-a-number

  if( num === 0){ return 1; }

  return num * factorialize( num - 1);

}

console.log( factorialize(5) );
