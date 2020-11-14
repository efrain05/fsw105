var readlineSync = require("readline-sync")
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("What operation would you like to perform? add/,sub/mul/div: ");

//Add
function addNumbers(num1,num2){
    return (num1 + num2)
}


//Subtract
function subtractNumbers(num1,num2){
    return (num1 - num2)
}


//Multiply
function multiplyNumbers(num1,num2){
    return (num1 * num2)
}


//Divide
function divideNumbers(num1,num2){
    return (num1 / num2)
}


if (enteredOperator === "add"){
    console.log(addNumbers(firstNumber,secondNumber))
}else if (enteredOperator === "sub"){
    console.log(subtractNumbers(firstNumber,secondNumber))
}else if (enteredOperator === "mul"){
  console.log (multiplyNumbers(firstNumber,secondNumber))
}else if(enteredOperator === "div"){
   console.log (divideNumbers(firstNumber,secondNumber))
}else{
    console.log("Can't recognize the operation provided. Please try agin.");
}