const isOperator = (value) => {
 return ["/", "x", "+", "-"].includes(value);
};

const isOperand = (value) => {
 return !isNaN(value) || value === ".";
};

const handleOperand = (value, state) => {
 if (state.operator) {
  state.num2 += value;
  state.displayValue = state.num2;
 } else {
  state.num1 += value;
  state.displayValue = state.num1;
 }
};

const handleOperator = (value, state) => {
 if (state.num1 === "") {
  return;
 } else {
  state.operator = value;
  state.displayValue = state.operator;
 }
};

const handleEqual = (state) => {
 if (state.num1 && state.num2 && state.operator) {
  state.displayValue = operate(
   state.num1,
   state.num2,
   state.operator
  ).toString();

  if (state.displayValue === "Don't divide by 0!") {
   state.num1 = "";
  } else {
   state.num1 = state.displayValue;
  }

  state.num2 = "";
  state.operator = "";
 }
};

const handleClear = (state) => {
 state.num1 = "";
 state.num2 = "";
 state.operator = "";
 state.displayValue = "0";
};

const operate = (num1, num2, operator) => {
 const a = parseInt(num1);
 const b = parseInt(num2);
 switch (operator) {
  case "+":
   return a + b;
  case "-":
   return a - b;
  case "*":
   return a * b;
  case "/":
   if (b === 0) {
    return "Don't divide by 0!";
   } else {
    result = a / b;
    const pow = Math.pow(10, 7);
    return Math.round(result * pow) / pow;
   }
  default:
   return;
 }
};

module.exports = {
 isOperator,
 isOperand,
 handleOperand,
 handleOperator,
 handleClear,
 handleEqual,
};
