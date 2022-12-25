// Elements Selection for DRY Principle:

const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.getElementById("equal-button");
const clearButton = document.getElementById("clear-button");

// Arrays for number storage:

let displayBoard = [];
let firstNumber, operator, secondNumber;

// Calculator function:

function calculate(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}

// Click Handling Function for numbers:

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (event) => {
    let clickedNumber = event.target.dataset.number;
    displayBoard.push(clickedNumber);
    calculatorDisplay.textContent += clickedNumber;
  })
);

// Click Handling Function for operators:

operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (event) => {
    let clickedOperator = event.target.innerHTML;
    calculatorDisplay.textContent += clickedOperator;
    operator = clickedOperator;
    firstNumber = displayBoard.join("");
    displayBoard = [];
  })
);

// Equal button functionality:

equalButton.addEventListener("click", () => {
  secondNumber = displayBoard.join("");
  calculatorDisplay.textContent =
    "=" + calculate(Number(firstNumber), operator, Number(secondNumber));
});

// Clear button functionality:

clearButton.addEventListener("click", () => {
  displayBoard = [];
  firstNumber = secondNumber = calculatorDisplay.textContent = "";
});
