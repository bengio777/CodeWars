// Notice the use of the == instead of ===. The == evaluates as a boolean rather than the strict equal. It is also important to note that each method must always have a set of parenthesis after, even if empty, in order to invoke. 

function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join(''))
}
console.log(isPalindrome('racecar'))
