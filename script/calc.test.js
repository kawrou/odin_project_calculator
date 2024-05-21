import {
 isOperator,
 isOperand,
 handleOperand,
 handleOperator,
 handleEqual,
 handleClear,
 handleSign, 
 operate,
} from "./calc.js";

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
   ["-", false],
  ])("isOperand(%s) returns %s", (a, expected) => {
   expect(isOperand(a)).toBe(expected);
  });
 });

 describe("handleOperand:", () => {
  test.each([
   ["1", "1"],
   ["12", "12"],
   ["-1", "-1"],
	 ["1.1", "1.1"],
  ])("can assign '%s' to num1 and displayValue", (input, expected) => {
   const calcState = {
    num1: "",
    num2: "",
    operator: "",
    displayValue: "0",
   };

   handleOperand(input, calcState);
   expect(calcState.num1).toBe(expected);
   expect(calcState.displayValue).toBe(expected);
  });

  test.each([
   ["1", "1"],
   ["12", "12"],
   ["-1", "-1"],
  ])("can assign '%s' to num2 and displayValue", (input, expected) => {
   const calcState = {
    num1: "10",
    num2: "",
    operator: "+",
    displayValue: "10",
   };

   handleOperand(input, calcState);
   expect(calcState.num2).toBe(expected);
   expect(calcState.displayValue).toBe(expected);
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

 describe("handleSign:", () => {
	test.each([["3", "-3"],["-3", "3"]])("turns %s to %s", (operand, expected) => {
		const calcState = {
			num1 : operand, 
			displayValue: operand,
		};

		handleSign(calcState);
		expect(calcState.num1).toBe(expected);
		expect(calcState.displayValue).toBe(expected); 
	})
 })
});

describe("Math functions", () => {
 describe("addition", () => {
  test.each([
   ["1", "2", "+", 3],
   ["2", "3", "+", 5],
   ["3", "4", "+", 7],
   ["1.2", "1.3", "+", 2.5],
  ])("adds %s and %s with operator '%s' to equal %i", (a, b, c, expected) => {
   expect(operate(a, b, c)).toBe(expected);
  });
 });

 describe("subtraction", () => {
  test.each([
   ["3", "2", "-", 1],
   ["6", "5", "-", 1],
   ["3", "4", "-", -1],
   ["100", "80", "-", 20],
   ["3.5", "1.5", "-", 2],
  ])(
   "subtacts %s and %s with operator '%s' to equal %i",
   (a, b, c, expected) => {
    expect(operate(a, b, c)).toBe(expected);
   }
  );
 });

 describe("multiplication", () => {
  test.each([
   ["2", "2", "x", 4],
   ["3", "3", "x", 9],
   ["4", "4", "x", 16],
   ["25", "25", "x", 625],
   ["2.2", "2.2", "x", 4.84],
  ])(
   "multiplies %s and %s with operator '%s' to equal %i",
   (a, b, c, expected) => {
    expect(operate(a, b, c)).toBe(expected);
   }
  );
 });

 describe("division", () => {
  test.each([
   ["4", "2", "/", 2],
   ["15", "3", "/", 5],
   ["25", "5", "/", 5],
   ["80", "7", "/", 11.4285714],
   ["5.1", "3.1", "/", 1.6451613],
  ])(
   "divides %s and %s with operator '%s' to equal %i",
   (a, b, c, expected) => {
    expect(operate(a, b, c)).toBe(expected);
   }
  );
 });
});
