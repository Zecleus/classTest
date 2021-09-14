alert("Hello. Welcome to Manual Calculator");
var operation = parseInt(prompt("Enter \n1 to Add \n2 to Subtract \n3 to Multiply \n4 to Divide"));

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

var result;

switch(operation){
    case 1: result = add(num1, num2);break;
    case 2: result = sub(num1, num2);break;
    case 3: result = mult(num1, num2);break;
    case 4: result = div(num1, num2);break;
    default: alert("Invalid Input"); break;
}

alert("The result is " + result);

function add(x, y){return x + y};
function sub(x, y){return x - y};
function mult(x, y){return x * y};
function div(x, y){return x / y};
