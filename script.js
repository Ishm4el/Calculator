const multiply = (a, b) => +a * +b;
const addition = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const divide = (a, b) => +a / +b;

let number1;
let number2;
let operator;

let screenString = '';

const operate = (numb1, oper, numb2) => {
    switch(oper) {
        case '+':
            return addition(numb1, numb2);
        case '-':
            return subtract(numb1, numb2);
        case '*':
            return multiply(numb1, numb2);
        case '/':
            return divide(numb1, numb2);
        default:
            return "ERROR";
    }
};

const calculate = (str) => {
    const temp = str.toString().split(' ');
    console.log(temp);
    if (temp.length == 1) {
        if (!isNaN(+temp[0]))
            return (+temp[0]).toFixed(2);
        else
            return '';
    }
    while(temp.length) {
        console.log('here');
        temp.push(operate(temp.pop(), temp.pop(), temp.pop()));
        if (temp.length === 1) {
            return temp.pop().toFixed(2);
        }
    }
};

const screen = document.querySelector('#display');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        str = button.textContent;
        if (str >= '0' && str <= '9' || str == '.') {
            screenString += str;
        }
        else if (str != 'c' && str != '=') {
            screenString += ' ' + str + ' ';
        }
        else if (str == '=') {
            screenString = calculate(screenString);
        }
        else if (str == 'c') {
            screenString = '';
        }
        screen.textContent = screenString;
    });
});