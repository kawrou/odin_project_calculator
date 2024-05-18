function sum(a, b) {
 return a + b;
}

function subtract(a, b) {
 return a - b;
}

function multiply(a, b) {
 return a * b;
}

function divide(a,b){
    result =  a / b;
    const pow = Math.pow(10, 7);
    return Math.round(result*pow) / pow;  
}
module.exports = { sum, subtract, multiply, divide };
