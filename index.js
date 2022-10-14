const display = document.querySelector("#display");
const allClearButton = document.querySelector(".btn-clear");
const allDeleteButton = document.querySelector(".btn-delete");

let number1 = "";
let number2 ="";
let operator = null;
let result;

// display number when user click any button. 
// display the first and second number.
const addNumber = (number) => {
    if (!operator) {
        number1 += number;
        display.innerHTML = number1;
    } else {
        number2 += number;
        display.innerHTML = number2;
    }
};
// Operator button
const setOperator = (newOperator) => {
  if(operator) {
    calculate();
  } else {
    operator = newOperator;
  }
};

// calculate result

const calculate = () => {
    
    if(operator === "add") {
        result = parseFloat(number1) + parseFloat(number2);
    }
    if(operator === "minus") {
        result = parseFloat(number1) - parseFloat(number2);
    }
    if(operator === "multiply") {
        result = parseFloat(number1) * parseFloat(number2);
    }
    if(operator === "devide") {
        result = parseFloat(number1) / parseFloat(number2);
    }
    display.innerHTML = result;
    number1 = result;
    number2 = "";
    updateCalculator ();
};

allClearButton.addEventListener('click', allClear);
allDeleteButton.addEventListener('click', allDelete);

// Clear button
function allClear() {
    number1= 0;
    number2= 0;
    operator = null;
    display.innerHTML = '';
    
}

// delete button
function allDelete() {
    display.innerHTML = display.innerHTML.slice(0,-1);
    if(display.innerHTML.length === 0) {
        allClear();
    }
    
}

function updateCalculator () {
    if(result === NaN) {
        display.innerHTML = "Error";
    }
}
// If it is not an operator so should return error