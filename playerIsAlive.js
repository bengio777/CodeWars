//fucntion designed to test player life if:

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive. Unfortunately, Greg made some errors while creating the function.
// checkAlive should return true if the player's health is greater than 0 or false if it is 0 or below.
//
// checkAlive receives one parameter health which will always be a whole number between -10 and 10.


function checkAlive (health) {
  if (health > 0 && health < 11) {
    return true;
  } else if (health <= 0 && health > -11) {
    return false;
  }
}
console.log(checkAlive(5));


//below is a BETTER solution refactored because the instructions give information that is contradictorary. If yuo are already not alive when health is <= 0, then health being >-11 is irrelevant since you are already dead at 0.

function checkAlive (health) {
  if (health > 0 && health < 11) {
    return true;
  } else if (health <= 0) {
    return false;
  }
}
console.log(checkAlive(5));
