function convertToNum(num)
{
  return parseInt(num);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator)
{
  let calcResult;
  switch(operator) {
    case '+':
      calcResult = add(num1, num2);
      break;
    case '-':
      calcResult = subtract(num1, num2);
      break;
    case '*':
      calcResult = multiplty(num1, num2);
      break;
    case '/':
      calcResult = divide(num1, num2);
  }
}

let num1 = '';
let num2 = '';
let operator = '';