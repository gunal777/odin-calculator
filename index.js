const display = document.getElementById("display");
let num1, num2;
let opr;
let resetNext = false;

function assign(input) {
    if (!isNaN(input) || input === '.') {
        if (input === '.' && display.value.includes('.')) return;

        if (resetNext) {
            display.value = '';
            resetNext = false;
        }

        display.value += input;
    } 
    else if (['+','-','*','/'].includes(input)) {
        if (display.value !== '') {
            if (num1 !== undefined && opr !== undefined) {
                num2 = parseFloat(display.value);
                let res = operate(num1, num2, opr);
                display.value = res;
                num1 = res;   
            } else {
                num1 = parseFloat(display.value);
            }
            opr = input;
            display.value = '';
        } else if (num1 !== undefined) {
            opr = input;
        }
    } 
    else if (input === "C") {
        clearAll();
    } 
    else if (input === '=') {
        result();
    }
}


function clearAll() {
    display.value = "";
    num1 = undefined;
    num2 = undefined;
    opr = undefined;
    resetNext = false;
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    else {
        return a / b;
    }
}

function operate(a, b, c) {
    switch (c) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error";
    }
}

function result() {
    if (num1 !== undefined && opr !== undefined && display.value !== "") {
        num2 = parseFloat(display.value);
        let result = operate(num1, num2, opr)
        display.value = result;

        num1 = undefined;
        num2 = undefined;
        opr = undefined;
        resetNext = true;
    }
}

function backspace() {
    if (!resetNext) {
        display.value = display.value.slice(0, -1);
    }
}