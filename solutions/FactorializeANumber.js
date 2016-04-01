function factorialize(num) {

  if( num === 0){ return 1; }

  return num * factorialize( num - 1);

}

console.log( factorialize(5) );
