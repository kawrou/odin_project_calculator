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
 isCalculated: false, 
};

const display = document.querySelector("#display");
const btns = document.querySelectorAll(".button");

document.addEventListener("keydown", (e) => {
 const key = e.key;
 console.log(key);
 if (/[0-9\+\-\*\/]/.test(key)) {
  handleButtonClick(key, calculatorState);
 } else if (key === "Enter") {
  handleEqual(calculatorState);
 } else if (key === "Escape") {
  handleClear();
 }
 updateDisplay(calculatorState.displayValue);
});

btns.forEach((btn) => {
 btn.addEventListener("click", (e) => {
  handleButtonClick(e.target.value, calculatorState);
  // console.log("num1", calculatorState.num1);
  // console.log("num2", calculatorState.num2);
  // console.log("operator", calculatorState.operator);
  // console.log("displayValue", calculatorState.displayValue);
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
 if (value === "/") {
  display.textContent = "÷";
 } else if (value === "x"){
	display.textContent = "×"
 }else {
  display.textContent = value;
 }
};

updateDisplay(calculatorState.displayValue);
