// Elements Selection for DRY Principle:

let calculatorDisplay = document.getElementById("calculator-display");
let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");

// Arrays for number storage:

let displayBoard = [];
let firstNumber, secondNumber;
let numberIndex = true;

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

let handleOperatorClicks = () => {
  operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener("click", (event) => {
      let clickedOperator = event.target.dataset.operator;
      console.log(clickedOperator);
    })
  );
};

handleNumberClicks();
