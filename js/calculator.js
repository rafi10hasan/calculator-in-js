let prevField = document.getElementById("prev-operand"); //get the value from prevField
let currentField = document.getElementById("current-operand"); //get the value from currentField
let currentInput = "";
let prevInput = "";
let calculationOperator = "";

//user input
function inputNumber(number) {
  currentInput += number;
}

//updated the result on display
function updateDisplay(currentInput, prevInput) {
  if (prevInput !== "") {
    prevField.innerText = prevInput;
  }
  currentField.innerText = currentInput;
}

//input operator from user
function inputOperator(operator) {
  if (calculationOperator === "") {
    prevInput = currentInput + operator;
  }
  calculationOperator = operator;
  currentInput = "";
}

//compute the calculation
function compute() {
  let result;
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case "÷":
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  prevInput = "";
  prevField.innerText = "";
  currentInput = ""+result;
  calculationOperator = "";
}

//clear screen
function clearOutput() {
  currentInput = "";
  prevInput = "";
  calculationOperator = "";
  currentField.innerText = 0;
  prevField.innerText = "";
}

//delete one number by one click
function deleteInput(inputString){
   inputString = inputString.split("");
   inputString.pop();
   currentInput = inputString.join("");
}

//catch the user input Number
const numbers = document.querySelectorAll(".number-button");

numbers.forEach((number) => {
  number.addEventListener("click", function (event) {
    inputNumber(event.target.innerText);
    updateDisplay(currentInput, prevInput);
  });
});

//catch the user input Operator
const operators = document.querySelectorAll(".btn-operator");

operators.forEach((operator) => {
  operator.addEventListener("click", function (event) {
    inputOperator(event.target.innerText);
    updateDisplay(currentInput, prevInput);
  });
});

//what happend after click the equal button
const equalButton = document.getElementById("equals-button");

equalButton.addEventListener("click", function () {
  compute();
  updateDisplay(currentInput, prevInput);
});

//catch the clear button
document.getElementById("clear-button").addEventListener("click", function () {
  clearOutput();
});

//Handling the decimal value
const decimal = document.getElementById("decimal-button");

decimal.addEventListener("click", function () {
  if (currentInput.includes(".")) return;
  else {
    currentInput += decimal.innerText;
    updateDisplay(currentInput,prevInput)
  }
});

//calculate the percentage
const percentage = document.getElementById("percentage-button");

percentage.addEventListener("click",function(){
  if(calculationOperator!==""){
    currentInput += percentage.innerText;
    updateDisplay(currentInput,prevInput);
    currentInput = parseFloat(currentInput)/100;
    
  }
})
//catch the delete button and delete previous number
const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click",function(){
 
  if(prevInput){
    deleteInput(prevInput)
    prevField.innerText = ""
    calculationOperator = ""
    prevInput =""
  }
  else{
   deleteInput(currentInput);
  }
  updateDisplay(currentInput,prevInput)
})

/************************************** Finish ********************************/