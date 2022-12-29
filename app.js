"use strict";

// Elements Selection for DRY Principle:
const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.getElementById("equal-button");
const clearButton = document.getElementById("clear-button");

// ********** REFACTOR MULTIPLE NUMBERS ************
// displayBoard will no longer exist.
// evalBoard will store the displayBoard values and after joining them using "".
// There will be no firstNumber and secondNumber, only operator and evalBoard.
// Calculate function will have eval() in it and will take the evalBoarda as inputs.
// Operator wouldn't be locked after entering the second number, only when used in multiple amounts at the same time will it be locked.
// ************** PREDICTIONS OVER *****************

// Arrays for number storage and other variables:
let evalBoard = "";
let locked = false;

// Calculator function:
function calculate(calculationString) {
  let result = eval(calculationString);
  return result;
}

// Click Handling Function for numbers:
numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (event) => {
    const clickedNumber = event.target.dataset.number;
    evalBoard += clickedNumber;
    console.log(evalBoard);
    calculatorDisplay.textContent = evalBoard;
    locked = false;
  })
);

// Click Handling Function for operators:
operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (event) => {
    if (locked === false) {
      const operator = event.target.innerHTML;
      if (operator !== "=" && operator !== "C") {
        evalBoard += operator;
      }
      calculatorDisplay.textContent = evalBoard;
      locked = true;
    }
  })
);

// Equal button functionality:
equalButton.addEventListener("click", () => {
  calculatorDisplay.textContent = `= ${calculate(evalBoard)}`;
});

// Clear button functionality:
clearButton.addEventListener("click", () => {
  locked = false;
  evalBoard = calculatorDisplay.textContent = "";
});
