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
//----------------------------------calculator
const calculation = (operation, op1, op2) => {
  if (operation == "+") {
    result = op1 + op2;
  } else if (operation == "-") {
    result = op1 - op2;
  } else if (operation == "*") {
    result = op1 * op2;
  } else if (operation == "/") {
    if (op2 == 0) {
      result = "not a bloody number";
    } else {
      result = op1 / op2;
      result = Math.round((result + Number.EPSILON) * 100) / 100;
    }
  } else if (operation == "%") {
    result = percent(op1, op2);
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  }
  if (isNaN(result)) result = "NOT a blody number";

  return result;
};

//----------------------------------display calculator
const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
buttons.forEach(function (e) {
  e.addEventListener("click", function (el) {
    console.log(el.target.value + " clicked");
  });
});
window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`button[value='${e.key}']`);
  console.log(e.key);
  if (key) {
    key.click();
  } else if (e.which == 13) {
    equal.click();
  } else if (e.which == 8) {
    display.textContent = "0";
    zero();
  } else if (e.which == 27) {
    display.textContent = "0";
    zero();
  }
});

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
    } else if (op1) {
      op2 = Number(displayNum);
      if (operation == "+") {
        op1 = op1 + op2;
      } else if (operation == "-") {
        op1 = op1 - op2;
      } else if (operation == "*") {
        op1 = op1 * op2;
      } else if (operation == "/") {
        if (op2 == 0) {
          result = "the sky is the limit";
        } else {
          op1 = op1 / op2;
          op1 = Math.round((result + Number.EPSILON) * 100) / 100;
        }
      }
    } else {
      op1 = Number(displayNum);
    }
    operation = operator.value;
    display.textContent = operator.value;
    displayNum = ""; // it empties the displayNum container
    console.log(op1);
    console.log(operator.value);
  });
});

const equal = document.querySelector(".equal"); //-----------------------result
equal.addEventListener("click", (e) => {
  op2 = Number(displayNum);
  result = calculation(operation, op1, op2);
  display.textContent = result;
  console.log(op2);
  console.log("Total " + result);
});
