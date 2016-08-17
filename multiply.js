function multiply(a, b){
   var mySolution = a * b;
   return mySolution;
}
multiply();

//above returns NaN

function multiply(a, b){
   var mySolution = a * b;
   return mySolution;
}
multiply(4,5);

//above returns 20


function multiply(a){
 var mySolution = a * 10;
 return mySolution;
}
multiply(5);
//above returns 50. if you comment out "return mySolution" the return on this function is "undefined."
