let op1 = null;
let op2 = null;
let operator = null;
let displayNum = "";
let displayNum2 = "";
let result = 0;
let operation;

const add = (a, b) => {
  return a + b;
};

const sustract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const percent = (a, b) => {
  let one = a / 100;
  let two = one * b;
  return two;
};

const display = document.querySelector(".display");

const nums = document.querySelectorAll(".operand");
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (display.textContent == result) {
      zero();
    }
    displayNum += num.value;
    display.textContent = displayNum;
  });
});

const cancel = document.querySelector(".cancel");
const zero = () => {
  displayNum = "";
  displayNum2 = "";
  op1 = "";
  op2 = "";
  result = 0;
  numbers = [];
  console.log("borrado");
};

cancel.addEventListener("click", () => {
  display.textContent = "0";
  zero();
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (display.textContent == result) {
      op1 = result;
      display.textContent = operator.value;
      console.log(
        "This is the number we are going to add another number to " +
          Number(op1)
      );
      operation = operator.value;
    } else {
      op1 = Number(displayNum);
      console.log("This is the first number " + Number(op1));
      console.log(operator.value);
      display.textContent = operator.value;
      operation = operator.value;
      displayNum = "";
    }
  });
});

const sign = document.querySelector(".sign");
sign.addEventListener("click", (e) => {
  displayNum = Number(displayNum) * -1;
  display.textContent = displayNum;
  console.log(displayNum);
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", (e) => {
  op2 = Number(displayNum);

  console.log("This is the second number " + Number(op2));
  if (operation == "+") {
    result = add(Number(op1), Number(op2));
  } else if (operation == "-") {
    result = sustract(Number(op1), Number(op2));
  } else if (operation == "*") {
    result = multiply(Number(op1), Number(op2));
  } else if (operation == "/") {
    result = divide(Number(op1), Number(op2)).toFixed(3);
  } else if (operation == "%") {
    result = percent(Number(op1), Number(op2)).toFixed(2);
  }
  display.textContent = result;
  console.log("This is the result " + result);
});

/*
(back operator + to adding in html)
const adding = document.querySelector(".adding");
adding.addEventListener("click", (e) => {
  console.log("This is the first number " + displayNum);
  op1 = displayNum;
  displayNum = "";
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", (e) => {
  op2 = displayNum;
  console.log("This is the second number " + displayNum);
  result = add(Number(op1), Number(op2));
  display.textContent = result;
  console.log("This is the result " + result);
});
*/
