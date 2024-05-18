const { sum, subtract, multiply, divide } = require("./calc_functions.js");

let num1, num2, operator;

const operate = (num1, num2, operator) => {
 switch(operator){
    case "+":
        sum(num1,num2);
    case "-":
        subtract(num1, num2); 
    case "*":
        multiply(num1, num2); 
    case "/":
        divide(num1, num2); 
 }
};

module.exports = { operate };
