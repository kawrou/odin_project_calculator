const { operate } = require("../script.js");
const { sum, subtract, multiply, divide } = require("../calc_functions.js");

jest.mock("./calc_functions.js", () => ({
 sum: jest.fn(),
 subtract: jest.fn(),
 multiply: jest.fn(),
 divide: jest.fn(),
}));

describe("Operate calls:", () => {
 afterEach(() => {
  jest.clearAllMocks();
 });

 test("sum function", () => {
  operate(1, 2, "+");
  expect(sum).toHaveBeenCalledTimes(1);
  expect(sum).toHaveBeenCalledWith(1, 2);
 });

 test("subtract function", () => {
  operate(1, 2, "-");
  expect(subtract).toHaveBeenCalledTimes(1);
  expect(subtract).toHaveBeenCalledWith(1, 2);
 });

 test("multiply function", () => {
  operate(1, 2, "*");
  expect(multiply).toHaveBeenCalledTimes(1);
  expect(multiply).toHaveBeenCalledWith(1, 2);
 });

 test("divide function", () => {
  operate(1, 2, "/");
  expect(divide).toHaveBeenCalledTimes(1);
  expect(divide).toHaveBeenCalledWith(1, 2);
 });
});
