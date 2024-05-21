export const isOperator = (value) => {
 return ["/", "x", "+", "-"].includes(value);
};

export const isOperand = (value) => {
 return !isNaN(value) || value === ".";
};

export const handleOperand = (value, state) => {
 if (value === "." && state.displayValue.includes(".")) {
  return;
 }

 if (!state.operator && state.isCalculated) {
  state.num1 = "";
  state.isCalculated = false;
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
 if (state.num1 === "" && value == "-") {
  state.num1 += value;
  state.displayValue = state.num1;
 } else if (state.num1) {
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
  state.isCalculated = true;
 }
};

export const handleClear = (state) => {
 state.num1 = "";
 state.num2 = "";
 state.operator = "";
 state.displayValue = "0";
};

export const handleSign = (state) => {
 if (state.num1[0] === "-") {
  state.num1 = state.num1.substring(1);
  state.displayValue = state.num1;
 } else {
  state.num1 = "-" + state.num1;
  state.displayValue = state.num1;
 }
};
export const operate = (num1, num2, operator) => {
 const a = parseFloat(num1);
 const b = parseFloat(num2);
 switch (operator) {
  case "+":
   return a + b;
  case "-":
   return a - b;
  case "x":
   return roundTo(a * b, 7);
  case "/":
   if (b === 0) {
    return "Don't divide by 0!";
   } else {
		return (roundTo(a/b, 7))
   }
  default:
   return;
 }

 function roundTo(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
};
