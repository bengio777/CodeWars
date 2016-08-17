//this was an exercise in debugging. It returns "Kaylan"

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}

Person.name = "Benjamin";
Person.prototype.greet.otherName = "Kalan";
