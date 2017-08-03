/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand){
  let sum = 0;
  let newHand = [];

  for(let i = 0 ; i < hand.length ; i++){
    if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
      let nom = Number("10")
      newHand.push(nom);
    }else if(hand[i] === "A"){
      newHand.push("A");
    }else{
      let nom = Number(hand[i])
      newHand.push(nom);
    }
    newHand.sort();
  }
  
  // for each card in our new hand..
  for(let i = 0 ; i < newHand.length ; i++) {
    // if the current card is an A..
    if (newHand[i] === "A") {
      // and our sum is currently 10 or less..
      if (sum <= 10) {
        sum = sum + 11;
        // add 11 to our sum.
      } else {
        sum = sum + 1;
        // otherwise.. add 1.
      }
    } 
    else {
      sum = sum + newHand[i]; 
    }
  }
  return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/