const { operate } = require("./script.js");

describe("Math functions", () => {
 describe("addition", () => {
  test.each([
   [1, 2, "+", 3],
   [2, 3, "+", 5],
   [3, 4, "+", 7],
  ])("adds %i and %i with operator '%s' to equal %i", (a, b, c, expected) => {
   expect(operate(a, b, c)).toBe(expected);
  });
 });

 describe("subtraction", () => {
  test.each([
   [3, 2, "-", 1],
   [6, 5, "-", 1],
   [3, 4, "-", -1],
   [100, 80, "-", 20],
  ])("subtacts %i and %i with operator '%s' to equal %i", (a, b, c, expected) => {
   expect(operate(a, b, c)).toBe(expected);
  });
 });

 describe("multiplcation", () => {
  test.each([
   [2, 2, "*", 4],
   [3, 3, "*", 9],
   [4, 4, "*", 16],
   [25, 25, "*", 625],
  ])("multiplies %i and %i with operator '%s' to equal %i", (a, b, c, expected) => {
   expect(operate(a, b, c)).toBe(expected);
  });
 });

 describe("division", () => {
  test.each([
   [4, 2, "/", 2],
   [15, 3, "/", 5],
   [25, 5, "/", 5],
   [80, 7, "/", 11.4285714],
  ])("divides %i and %i with operator '%s' to equal %i", (a, b, c, expected) => {
   expect(operate(a, b, c)).toBe(expected);
  });
 });
});
