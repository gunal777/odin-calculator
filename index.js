const display = document.getElementById("display");
let num1, num2;
let opr;

function assign(input)
{
    console.log(input);
    if(!isNaN(input)|| input === '.')
    {
        display.value += input; 
    }
    else if(['+','-','*','/'].includes(input))
    {
        if(display.value !== '')
            {
                num1 = parseFloat(display.value);
                opr = input;
                display.value = '';
            }
    }
    else if(input === "C")
    {
        display.value = "";
        num1 = undefined;
        num2 = undefined;
        opr = undefined;
    }
    else if(input === '=')
    {
        result();
    }
}


function add(a,b)
{
    return a+b;
}

function substract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    if(b===0)
    {
        return "Error";
    }
    else {
        return a/b;
    }
}

function operate(a,b,c)
{
    switch(c)
    {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return "Error";
    }
}

function result()
{
    if(num1 !== undefined && opr !== undefined && display.value !=="")
    {
        num2 = parseFloat(display.value);
        let result = operate(num1,num2,opr)
        display.value = result;

        num1 = undefined;
        num2 = undefined;
        opr = undefined;
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
