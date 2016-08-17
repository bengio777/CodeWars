// Again, much like the use of the == operator in the palindromeStrings exercise we use this instead of the strict equal because it evaluates as a boolean.

function chromosomeCheck(sperm) {
  if(sperm == 'XY')
  {
    return "Congratulations! You're going to have a son.";
  }
  else {

  return "Congratulations! You're going to have a daughter.";
}
}

console.log(chromosomeCheck('XY'));

console.log(chromosomeCheck('XX'));

console.log(chromosomeCheck('xx'));

//multiple variations on log for testing purposes for integrety of solution. 
