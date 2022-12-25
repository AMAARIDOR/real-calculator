// Elements Selection for DRY Principle:

const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.getElementById("equal-button");
const clearButton = document.getElementById("clear-button");

// Arrays for number storage:

let displayBoard = [];
let firstNumber, secondNumber;

// Click Handling Function for numbers:

let handleNumberClicks = () => {
  numberButtons.forEach((numberButton) =>
    numberButton.addEventListener("click", (event) => {
      let clickedNumber = event.target.dataset.number;
      displayBoard.push(clickedNumber);
      calculatorDisplay.textContent = displayBoard.join("");
    })
  );
};

// Click Handling Function for operators:

let handleOperatorClicks = () => {
  operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener("click", (event) => {
      let clickedOperator = event.target.innerHTML;
      calculatorDisplay.textContent += clickedOperator;
      firstNumber = displayBoard.join("");
      console.log(firstNumber);
      displayBoard = [];
    })
  );
};

// Equal button functionality:

equalButton.addEventListener("click", () => {
  secondNumber = displayBoard.join("");
  console.log(secondNumber);
});

// Calling clickHandlers:

handleNumberClicks();
handleOperatorClicks();
