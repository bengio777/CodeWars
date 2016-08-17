function basicOp(o, v1, v2)
{
 if (o === '+') return v1 + v2;
 if (o === '-') return v1 - v2;
 if (o === '/') return v1 / v2;
 if (o === '*') return v1 * v2;
}
console.log(basicOp('-',4,1));

///////// above logs 3
////////////////////////


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(basicOp('-',4,1));


///// above also logs 3
////////////////////////

function basicOp(operation, value1, value2)
{
  return eval(value1 + " " + operation + " " + value2);
}

console.log(basicOp('/', 4, 2));

//// above logs 2
///////////////////////////////// why does repal say "eval can be harmful" in a warning?

function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
  case "+":
  return value1 + value2;

  case "-":

  case "*":
  return value1 * value2;

  case "/":
  return value1 / value2;

  }
}

console.log(basicOp('/', 4, 2));


////above code also logs 2
