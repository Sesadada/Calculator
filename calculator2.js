//----------------------------global variables
let op1 = null;
let op2 = null;
let operator = null;
let displayNum = "";
let displayNum2 = "";
let result = 0;
let operation;
let temp = [];

//----------------------------operator functions
const percent = (a, b) => {
  let one = a / 100;
  let two = one * b;
  return two;
};

const sign = document.querySelector(".sign");
sign.addEventListener("click", (e) => {
  displayNum = Number(displayNum) * -1;
  display.textContent = displayNum;
  console.log(displayNum);
});

//--------------------------------cancel
const zero = () => {
  displayNum = "";
  displayNum2 = "";
  op1 = "";
  op2 = "";
  result = 0;
  temp = [];
  console.log("display cleared");
};

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  display.textContent = "0";
  zero();
});

//----------------------------------display calculator
const display = document.querySelector(".display");

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);

  key.click();
});
//

const nums = document.querySelectorAll(".operand"); //------------------numbers
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (display.textContent == result) {
      zero();
    }
    if (num.value == "." && displayNum.includes(".")) {
      zero();
      display.textContent = "not a valid number";
      zero();
    } else {
      displayNum += num.value;
      display.textContent = displayNum;
    }
  });
});

const operators = document.querySelectorAll(".operator"); //----------------operators : / + -
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (display.textContent == result) {
      display.textContent = operator.value; // shows the operator in the display
      operation = operator.value;
      op1 = result;
      displayNum = "";
    } else {
      display.textContent = operator.value;
      op1 = Number(displayNum);
      if (typeof temp == "number") {
        temp = [];
      }
      temp.push(op1);
      if (Object.keys(temp).length == 2) {
        if (operation == "+") {
          temp = temp.reduce((a, b) => a + b);
        } else if (operation == "/") {
          temp = temp.reduce((a, b) => a / b);
        } else if (operation == "-") {
          temp = temp.reduce((a, b) => a - b);
        } else if (operation == "*") {
          temp = temp.reduce((a, b) => a * b);
        }
      }
      op1 = temp;
      operation = operator.value;
      displayNum = ""; // it empties the displayNum container
      console.log(op1);
      console.log(operator.value);
    }
  });
});

const equal = document.querySelector(".equal"); //-----------------------result
equal.addEventListener("click", (e) => {
  op2 = Number(displayNum);
  if (operation == "+") {
    result = Number(op1) + Number(op2);
  } else if (operation == "-") {
    result = Number(op1) - Number(op2);
  } else if (operation == "*") {
    result = Number(op1) * Number(op2);
  } else if (operation == "/") {
    if (op2 == 0) {
      result = "the sky is the limit";
    } else {
      result = Number(op1) / Number(op2);
      result = Math.round((result + Number.EPSILON) * 100) / 100;
    }
  } else if (operation == "%") {
    result = percent(Number(op1), Number(op2));
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  }
  if (result === NaN) {
    display.textContent = "the sky is the limit";
  } else {
    display.textContent = result;
  }
  console.log(op2);
  console.log("Total " + result);
});
