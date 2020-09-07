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

const operate = (fun, a, b) => {
  return fun(a, b);
};

console.log(add(10, 9));
console.log(sustract(10, 9));
console.log(multiply(10, 9));
console.log(divide(10, 9));
