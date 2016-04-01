function mutation(arr) {

  var one = arr[0].toLowerCase();
  var two = arr[1].toLowerCase();


  for(var i=0; i<two.length; i++){

    if(  one.indexOf( two[i] ) == -1 ){
      return false;

    }
  }


  return true;
}

console.log( mutation(["hello", "hey"]) );
