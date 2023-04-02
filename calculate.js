/*
  *** FUNCTIONS FOR MATHEMATICAL OPERATIONS ***
*/
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

/*
  *** FUNCTIONS FOR CALCULATOR OPERATION ***
*/

function getButtonClicked(button) {
  return button.id;
}

function getNumPressed(buttonID) {
  let pressed = '';
  switch(buttonID) {
    case 'num-decimal':
      pressed = '.';
      break;
    case 'num-zero':
      pressed = '0';
      break;
    case 'num-one':
      pressed = '1';
      break;
    case 'num-two':
      pressed = '2';
      break;
    case 'num-three':
      pressed = '3';
      break;
    case 'num-four':
      pressed = '4';
      break;
    case 'num-five':
      pressed = '5';
      break;
    case 'num-six':
      pressed = '6';
      break;
    case 'num-seven':
      pressed = '7';
      break;
    case 'num-eight':
      pressed = '8';
      break;
    case 'num-nine':
      pressed = '9';
  }
  return pressed;
}

function getOperatorPressed(buttonID) {
  let pressed = '';
  switch(buttonID) {
    case 'operation-divide':
      pressed = ' / ';
      break;
    case 'operation-multiply':
      pressed = ' * ';
      break;
    case 'operation-minus':
      pressed = ' - ';
      break;
    case 'operation-plus':
      pressed = ' + ';
      break;
    case 'operation-clear':
      pressed = 'c';
  }
}

function checkIfClear(pressed) {
  if (pressed = 'c') {
    problemString = '';
  }
}

function updateProblemString(buttonID, buttonType) {
  // If number button pressed, append to 'problemString'.
  let pressed = '';
  if (buttonType === 'number') {
    pressed = getNumPressed(buttonID);
    problemString += pressed;
  } else if (buttonType === 'operation') {
    pressed = getOperatorPressed(buttonID);
    
    problemString += pressed;
  } else {
    // place/remove negative sign from front of number
    // currently being displayed.
    return;
  }
}

function getButtonType(buttonID) {
  let type = '';
  if (buttonID.includes('num')) {
    type = 'number';
  } else if (buttonID.includes('operation')) {
    type = 'operation';
  } else {
    type = 'modify';
  }
  return type;
}

function buttonFunctions(e) {
  // Get ID of clicked element.
  let buttonID = getButtonClicked(this);
  console.log(buttonID);

  // Get type of button that was clicked (number or operation).
  let buttonType = getButtonType(buttonID);
  console.log(buttonType);

  updateProblemString(buttonID, buttonType);
  console.log(problemString);

  // Update string used to for display.


  // If number, decimal, or plus-minus buttons pressed,
  // modify text on display.
  // If operation button pressed, queue up
  
}

let num1 = '';
let num2 = '';
let mathResult = '';
let operator = '';
let problemString = '';


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonFunctions));