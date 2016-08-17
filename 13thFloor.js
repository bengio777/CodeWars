// This function is designed to solve the problem that arises with office and apartment buildings in the US typically ommitting the inclusing of a 13th floor as well as their naming the ground floor Lobby, or, essentially equivilent to zero instead of 1, when the next floor up starts at 2.

function getRealFloor(n) {
if (n > 14) return n - 2;
if (n > 0) return n -1;
return n;

}
console.log(getRealFloor(100))


//the above log tests 100 as an argument for n. 
