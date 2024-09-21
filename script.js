const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let secondOperand = '';
let currentInput = '';
let operator = '';
let firstOperand = '';
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const value = this.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.value = '';
      return;
    }

    if (!isNaN(value)) {
      currentInput += value;
      display.value = currentInput;
    } else if (value === '=') {
      secondOperand = currentInput;
      display.value = calculate(firstOperand, secondOperand, operator);
      currentInput = display.value;
      firstOperand = '';
      secondOperand = '';
    } else {
      if (currentInput) {
        firstOperand = currentInput;
        currentInput = '';
        operator = value;
      }
    }
  });
});


function calculate(firstOperand, secondOperand, operator) {
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);
  
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}


