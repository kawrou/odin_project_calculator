export const isOperator = (value) => {
 return ["/", "x", "+", "-"].includes(value);
};

export const isOperand = (value) => {
 return !isNaN(value) || value === "." || value === "-";
};

export const handleOperand = (value, state) => {
 if (value === "." && state.displayValue.includes(".")) {
  return;
 }

 if (state.operator) {
  state.num2 += value;
  state.displayValue = state.num2;
 } else {
  state.num1 += value;
  state.displayValue = state.num1;
 }
};

export const handleOperator = (value, state) => {
 if (state.num1 === "") {
  return;
 } else {
  state.operator = value;
  state.displayValue = state.operator;
 }
};

export const handleEqual = (state) => {
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

export const handleClear = (state) => {
 state.num1 = "";
 state.num2 = "";
 state.operator = "";
 state.displayValue = "0";
};

export const operate = (num1, num2, operator) => {
 const a = parseFloat(num1);
 const b = parseFloat(num2);
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
    const result = a / b;
    const pow = Math.pow(10, 7);
    return Math.round(result * pow) / pow;
   }
  default:
   return;
 }
};
