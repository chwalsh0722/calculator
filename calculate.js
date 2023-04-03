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

function applyNumberSigns() {

  // Set sign for numsParsed[0]
  if (numSigns[0] === '+') {
    numsParsed[0] = numsParsed[0]; 
  }
  else {
    numsParsed[0] = -1 * numsParsed[0];
  }

  // Set sign for numParsed[1]
  if (numSigns[1] === '+') {
    numsParsed[1] = numsParsed[1];
  } else {
    numsParsed[1] = -1 * numsParsed[1];
  }
}

function operate(num1, num2, operator)
{
  numsParsed = [parseInt(num1), parseInt(num2)];
  applyNumberSigns();

  let calcResult;
  switch(operator) {
    case '+':
      calcResult = add(numsParsed[0], numsParsed[1]);
      break;
    case '-':
      calcResult = subtract(numsParsed[0], numsParsed[1]);
      break;
    case '*':
      calcResult = multiply(numsParsed[0], numsParsed[1]);
      break;
    case '/':
      calcResult = divide(numsParsed[0], numsParsed[1]);
  }
  console.log(calcResult);
  calcResult = updateSigns(calcResult);
  nums[0] = String(calcResult);
  nums[1] = '';
  console.log("nums = ", nums);
  console.log("numSigns = ", numSigns)
}

/*
  *** FUNCTIONS FOR CALCULATOR OPERATION ***
*/

function updateSigns(calcResult) {
  if (calcResult < 0) {
    numSigns[0] = '-';
    calcResult = -1 * calcResult;
  } else {
    numSigns[0] = '+';
  }
  numSigns[1] = '+';
  return calcResult;
}

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
  nums[numUserEntering] += pressed;
  console.log(nums);
}

// function parseProblemStringArray()
// {
//   let length = problemStringArray.length;
//   let numString = '';
//   let numsIndex = 0;
//   let operator = '';
//   for (let i = 0; i < length; i++)
//   {
//     let char = problemStringArray[i];
//     if (char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '0') {
//       numString += char;
//     } else {
//       nums[numsIndex] = parseInt(numString);
//       operator = char;
//       numString = '';
//       numsIndex++;
//     }
//   }
//   nums[1] = parseInt(numString);
//   console.log(nums);
//   console.log(operator);
//   operate(nums[0], nums[1], operator);
// }

function getOperatorPressed(buttonID) {
  let pressed = '';
  switch(buttonID) {
    case 'operation-divide':
      operator = "/";
      break;
    case 'operation-multiply':
      operator = "*";
      break;
    case 'operation-minus':
      operator = "-";
      break;
    case 'operation-plus':
      operator = "+";
      break;
    case 'operation-clear':
      operator = "c";
      break;
    case 'operation-equals':
      operate(nums[0], nums[1], operator);
      operator = '';
  }

  console.log(operator);

  // If C pressed, reset all global variables.
  if (operator === 'c') {
    nums = ['', ''];
    numSigns = ['+', '+'];
    operator = '';
    numUserEntering = 0;
    problemStringArray = [];
    console.log('nums = ', nums);
    console.log('numSigns = ', numSigns);
    console.log('operator = ', operator);
    console.log('numUserEntering = ', numUserEntering);
    console.log('problemStringArray = ', problemStringArray);
  }
}

function changeNumSign() {
  if (numSigns[numUserEntering] === '+') {
    numSigns[numUserEntering] = '-';
  } else if (numSigns[numUserEntering] === '-') {
    numSigns[numUserEntering] = '+';
  }
  console.log(numSigns);
}

function updateGlobalVariables(buttonID, buttonType) {
  // If number button pressed, append to 'problemStringArray'.
  if (buttonType === 'number') {
    getNumPressed(buttonID);
  } else if (buttonType === 'operation') {
    getOperatorPressed(buttonID);
    numUserEntering = 1;
  } else {
    changeNumSign();
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

  // Get type of button that was clicked (number or operation).
  let buttonType = getButtonType(buttonID);

  updateGlobalVariables(buttonID, buttonType);

  // Update string used to for display.


  // If number, decimal, or plus-minus buttons pressed,
  // modify text on display.
  // If operation button pressed, queue up
  
}

let nums = ['', ''];
let numsParsed = [0, 0];
let numSigns = ['+', '+'];
let numUserEntering = 0;
let numSign1 = '+';
let numSign2 = '+';
let operator = '';


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonFunctions));