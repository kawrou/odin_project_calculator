import {
 isOperator,
 isOperand,
 handleOperand,
 handleOperator,
 handleEqual,
 handleClear,
} from "./calc.js";

let calculatorState = {
 num1: "",
 num2: "",
 operator: "",
 displayValue: "0",
};

const display = document.querySelector("#display");
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
 btn.addEventListener("click", (e) => {
  handleButtonClick(e.target.value, calculatorState);
  updateDisplay(calculatorState.displayValue);
 });
});

const handleButtonClick = (value, state) => {
 if (isOperator(value)) {
  handleOperator(value, state);
 } else if (isOperand(value)) {
  handleOperand(value, state);
 } else if (value === "=") {
  handleEqual(state);
 } else if (value === "clear") {
  handleClear(state);
 }
};

const updateDisplay = (value) => {
 display.textContent = value;
};

updateDisplay(calculatorState.displayValue);

// module.exports = { isOperator };
