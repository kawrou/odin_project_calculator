let num1 = null,
 num2 = null,
 operator;

let displayValue = 0; 

const display = document.querySelector("#display")
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
 btn.addEventListener("click", (e) => {
  updateDisplay(e.target.value);
 });
});

const updateDisplay = (value) => {
  display.textContent=value; 
}

updateDisplay(displayValue); 

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
