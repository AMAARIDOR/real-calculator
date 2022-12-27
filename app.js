"use strict";

// Elements Selection for DRY Principle:
const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.getElementById("equal-button");
const clearButton = document.getElementById("clear-button");

// Arrays for number storage and other variables:
let displayBoard = [];
let firstNumber, operator, secondNumber;
let locked = false;

// Calculator function:
function calculate(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

// Click Handling Function for numbers:
numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (event) => {
    const clickedNumber = event.target.dataset.number;
    displayBoard.push(clickedNumber);
    calculatorDisplay.textContent += clickedNumber;
  })
);

// Click Handling Function for operators:
operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (event) => {
    if (locked === false) {
      operator = event.target.innerHTML;
      console.log(operator);
      calculatorDisplay.textContent += operator;
      firstNumber = displayBoard.join("");
      displayBoard = [];
      locked = true;
    }
  })
);

// Equal button functionality:
equalButton.addEventListener("click", () => {
  secondNumber = displayBoard.join("");
  calculatorDisplay.textContent = `= ${calculate(
    Number(firstNumber),
    operator,
    Number(secondNumber)
  )}`;
});

// Clear button functionality:
clearButton.addEventListener("click", () => {
  displayBoard = [];
  locked = false;
  firstNumber = secondNumber = calculatorDisplay.textContent = "";
});
