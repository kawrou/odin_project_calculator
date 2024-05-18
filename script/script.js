let num1, num2, operator, display;

const operate = (num1, num2, operator) => {
 switch (operator) {
  case "+":
   return num1 + num2;
  case "-":
   return num1 - num2;
  case "*":
   return num1 * num2;
  case "/":
   result = num1 / num2;
   const pow = Math.pow(10, 7);
   return Math.round(result * pow) / pow;
 }
};

module.exports = { operate };
