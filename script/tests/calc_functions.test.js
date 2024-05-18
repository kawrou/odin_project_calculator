const { sum, subtract, multiply, divide } = require("../calc_functions.js");

describe("calculator functions", () => {
 test.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
 ])("adds %i and %i to equal %i", (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
 });

 test.each([
  [3, 2, 1],
  [6, 5, 1],
  [3, 4, -1],
  [100, 80, 20],
 ])("subtacts %i and %i to equal %i", (a, b, expected) => {
  expect(subtract(a, b)).toBe(expected);
 });

 test.each([
  [2, 2, 4],
  [3, 3, 9],
  [4, 4, 16],
  [25, 25, 625],
 ])("multiplies %i and %i to equal %i", (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
 });

 test.each([
    [4,2,2],
    [15,3,5],
    [25,5,5],
    [80,7,11.4285714],
 ])("divides %i and %i to equal %i", (a,b,expected) => {
    expect(divide(a,b)).toBe(expected); 
 })
});
