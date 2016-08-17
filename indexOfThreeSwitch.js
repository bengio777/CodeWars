var meerkat = ["lower legs", "torso", "upper legs"]

function fixTheMeerkat(arr) {
 var meerkatA = meerkat.slice(0);
 var meerkatB = meerkatA.pop();
 var meerkatC = meerkatB.push('lower legs');
 var str = "upper legs"
 var finalMeerKat = meerkatC.str.slice(0,1);
 return finalMeerKat;
}


////above is the first attempt... VERY UGLY. Does not work.


function fixTheMeerkat(arr) {
return arr.reverse();
}

///////the above answer is correct testing w/in the CodeWars question.



function fixTheMeerkat(arr) {
return arr.reverse();
}
fixTheMeerkat(["head", "torso", "feet"]);
/////The above code tests arr.reverse with array elements.



function fixTheMeerkat(meerKat) {
return meerKat.reverse();
}
fixTheMeerkat(["head", "torso", "feet"]);
///////also works just as previous but with meerkat as Parameter and same arguments as elements to be reversed within the array.
