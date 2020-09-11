//----------------------------global variables
let op1 = null;
let op2 = null;
let operator = null;
let displayNum = "";
let displayNum2 = "";
let result = 0;
let operation;
let temp;
//----------------------------operator functions
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
  numbers = [];
  console.log("borrado");
};

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  display.textContent = "0";
  zero();
});

//----------------------------------display calculator

const display = document.querySelector(".display");

const nums = document.querySelectorAll(".operand"); //------------------numbers
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (display.textContent == result) {
      zero();
    }
    displayNum += num.value;
    display.textContent = displayNum;
    console.log(displayNum);
  });
});

const operators = document.querySelectorAll(".operator"); //----------------operators : / + -
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (display.textContent == result) {
      // ------------------------------------------IN CASE THERE IS ALREADY A RESULT IN THE DISPLAY
      display.textContent = operator.value; // shows the operator in the display
      operation = operator.value; // establishes which is the operation to do
      op1 = result; // puts the result as number to add another number to (establishes OP1)
      displayNum = ""; //it empties the displayNum container
      console.log(
        "This is the result we are going to add some number to " + Number(op1)
      );
      operation = operator.value;
    } else {
      // ----------------------------------------------------IN CASE THERE IS NOTHING IN THE DISPLAY
      display.textContent = operator.value; // shows the operator in the display
      operation = operator.value; // establishes which is the operation to do
      op1 = Number(displayNum); // establishes which is the OP1
      displayNum = ""; // it empties the displayNum container
      console.log("This is the first number " + Number(op1));
      console.log(operator.value);
    }
  });
});

const equal = document.querySelector(".equal"); //-----------------------result
equal.addEventListener("click", (e) => {
  op2 = Number(displayNum);

  if (operation == "+") {
    result = add(Number(op1), Number(op2));
  } else if (operation == "-") {
    result = sustract(Number(op1), Number(op2));
  } else if (operation == "*") {
    result = multiply(Number(op1), Number(op2));
  } else if (operation == "/") {
    result = divide(Number(op1), Number(op2));
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  } else if (operation == "%") {
    result = percent(Number(op1), Number(op2));
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  }
  display.textContent = result;
  console.log("This is the result " + result);
});

/*

const equal = document.querySelector(".equal"); //-----------------------result
equal.addEventListener("click", (e) => {
  op2 = Number(displayNum);
  console.log("This is another number " + Number(op2));
  if (operation == "+") {
    result = add(Number(op1), Number(op2));
  } else if (operation == "-") {
    result = sustract(Number(op1), Number(op2));
  } else if (operation == "*") {
    result = multiply(Number(op1), Number(op2));
  } else if (operation == "/") {
    result = divide(Number(op1), Number(op2));
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  } else if (operation == "%") {
    result = percent(Number(op1), Number(op2));
    result = Math.round((result + Number.EPSILON) * 100) / 100;
  }
  display.textContent = result;
  console.log("This is the result " + result);
});


















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
