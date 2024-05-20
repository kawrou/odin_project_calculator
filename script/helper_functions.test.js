const {
 isOperator,
 isOperand,
 handleOperand,
 handleOperator,
 handleEqual,
 handleClear,
} = require("./helper_functions.js");

describe("helper functions", () => {
 describe("'is' handler functions", () => {
  test.each([
   ["/", true],
   ["x", true],
   ["+", true],
   ["-", true],
   ["1", false],
  ])("isOperator(%s) returns %s if math symbol", (a, expected) => {
   expect(isOperator(a)).toBe(expected);
  });

  test.each([
   ["1", true],
   [".", true],
   ["x", false],
  ])("isOperand(%s) returns %s", (a, expected) => {
   expect(isOperand(a)).toBe(expected);
  });
 });
 describe("handleOperand:", () => {
  test("updates num1 and displayValue", () => {
   const calcState = {
    num1: "",
    num2: "",
    operator: "",
    displayValue: "0",
   };

   handleOperand("1", calcState);
   expect(calcState.num1).toBe("1");
   expect(calcState.displayValue).toBe("1");
  });

  test("updates num1 and displayValue with multiple numbers", () => {
   const calcState = {
    num1: "",
    num2: "",
    operator: "",
    displayValue: "0",
   };

   handleOperand("1", calcState);
   handleOperand("2", calcState);
   expect(calcState.num1).toBe("12");
   expect(calcState.displayValue).toBe("12");
  });

  test("updates num2 and displayValue", () => {
   const calcState = {
    num1: "1",
    num2: "",
    operator: "+",
    displayValue: "+",
   };

   handleOperand("2", calcState);
   expect(calcState.num2).toBe("2");
   expect(calcState.displayValue).toBe("2");
  });

  test("updates num2 and displayValue with multiple numbers", () => {
   const calcState = {
    num1: "1",
    num2: "",
    operator: "+",
    displayValue: "+",
   };

   handleOperand("1", calcState);
   handleOperand("2", calcState);
   expect(calcState.num2).toBe("12");
   expect(calcState.displayValue).toBe("12");
  });
 });

 describe("handleOperator:", () => {
  test("assigns correct math symbol to 'operator' variable", () => {
   const calcState = {
    num1: "1",
    num2: "",
    operator: "",
    displayValue: "1",
   };

   handleOperator("+", calcState);
   expect(calcState.operator).toBe("+");
   expect(calcState.displayValue).toBe("+");
  });

  test("doesn't assign math symbol to 'operator' if num1 is empty", () => {
   const calcState = {
    num1: "",
    num2: "",
    operator: "",
    displayValue: "0",
   };

   handleOperator("+", calcState);
   expect(calcState.operator).toBe("");
   expect(calcState.displayValue).toBe("0");
  });
 });

 describe("handleEqual:", () => {
  test("calls 'operate' and updates displayValue", () => {
   const calcState = {
    num1: "12",
    num2: "3",
    operator: "+",
    displayValue: "3",
   };

   handleEqual(calcState);
   expect(calcState.num1).toBe("15");
   expect(calcState.num2).toBe("");
   expect(calcState.operator).toBe("");
   expect(calcState.displayValue).toBe("15");
  });

  test("returns if operator and all operands aren't assigned", () => {
   const calcState = {
    num1: "1",
    num2: "",
    operator: "",
    displayValue: "1",
   };

   handleEqual(calcState);
   expect(calcState.num1).toBe("1");
   expect(calcState.num2).toBeFalsy(); 
   expect(calcState.operator).toBeFalsy(); 
   expect(calcState.displayValue).toBe("1");
  });

  test("Shows error when divide by 0", () => {
   const calcState = {
    num1: "12",
    num2: "0",
    operator: "/",
    displayValue: "0",
   };

   handleEqual(calcState);
   expect(calcState.num1).toBe("");
   expect(calcState.num2).toBe("");
   expect(calcState.operator).toBe("");
   expect(calcState.displayValue).toBe("Don't divide by 0!");
  });
 });

 describe("handleClear:", () => {
  test("resets calcState", () => {
   const calcState = {
    num1: "12",
    num2: "3",
    operator: "+",
    displayValue: "3",
   };

   handleClear(calcState);
   expect(calcState.num1).toBe("");
   expect(calcState.num2).toBe("");
   expect(calcState.operator).toBe("");
   expect(calcState.displayValue).toBe("0");
  });
 });
});
