import { fireEvent, prettyDOM, screen } from "@testing-library/dom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("Calculator App", () => {
 let display;

 beforeEach(() => {
  document.body.innerHTML = html;

  display = document.querySelector("#display");

  jest.resetModules(); // Clear the module registry
  require("./script");
 });

 describe("Should display the number when:", () => {
  test.each([["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"]])(
   "%s is clicked",
   (num1) => {
    const button1 = screen.getByText(num1);
    fireEvent.click(button1);
    expect(display).toHaveTextContent(num1);
   }
  );
 });

 describe("Should display 1st operand after:", () => {
  test("numbers are clicked", () => {
   const button1 = screen.getByText("1");
   const button2 = screen.getByText("2");
   fireEvent.click(button1);
   fireEvent.click(button2);
   expect(display).toHaveTextContent("12");
  });
 });

 describe("Should handle operator when:", () => {
  test.each([["+"], ["-"], ["×"], ["÷"]])("'%s' is clicked", (operator) => {
   const button1 = screen.getByText("1");
   const buttonOperator = screen.getByText(operator);

   fireEvent.click(button1);
   fireEvent.click(buttonOperator);

   expect(display).toHaveTextContent(operator);
   expect(display).not.toHaveTextContent("1");
  });
 });

 describe("Should display 2nd operand after:", () => {
  test.each([["+"], ["-"], ["×"], ["÷"]])("%s clicked", (operator) => {
   const button1 = screen.getByText("1");
   const buttonOperator = screen.getByText(operator);
   const button2 = screen.getByText("2");

   fireEvent.click(button1);
   fireEvent.click(buttonOperator);
   fireEvent.click(button2);

   expect(display).toHaveTextContent("2");
   expect(display).not.toHaveTextContent(operator);
  });
 });

 describe("Should handle calculation with", () => {
  test.each([
   ["+", "24"],
   ["-", "0"],
   ["×", "144"],
   ["÷", "1"],
  ])("%s operator", (operator, result) => {
   const button1 = screen.getByText("1");
   const button2 = screen.getByText("2");
   const buttonOperator = screen.getByText(operator);
   const buttonEqual = screen.getByText("=");

   fireEvent.click(button1);
   fireEvent.click(button2);
   fireEvent.click(buttonOperator);
   fireEvent.click(button1);
   fireEvent.click(button2);
   fireEvent.click(buttonEqual);

   expect(display).toHaveTextContent(result);
  });
 });

 describe("Should show new 1st operand:", () => {
  test("after finishing previous calculation", () => {
   const button1 = screen.getByText("1");
   const button2 = screen.getByText("2");
   const buttonOperator = screen.getByText("+");
   const buttonEqual = screen.getByText("=");

   fireEvent.click(button1);
   fireEvent.click(buttonOperator);
   fireEvent.click(button2);
   fireEvent.click(buttonEqual);
   fireEvent.click(button2);
   console.log(prettyDOM(document.body));
   expect(display).toHaveTextContent("2");
   expect(display).not.toHaveTextContent("32");
  });
 });
 test("should handle clear click", () => {
  const button1 = screen.getByText("1");
  const button2 = screen.getByText("2");
  const buttonClear = screen.getByText("AC");
  fireEvent.click(button1);
  fireEvent.click(button2);
  fireEvent.click(buttonClear);
  expect(display).toHaveTextContent("0");
 });
});
