const display = document.getElementById("display");
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
        break;
        case '-':
            return substract(a,b);
        break;
        case '*':
            return multiply(a,b);
        break;
        case '/':
            return divide(a,b);
        break;
        default:
            return;
        break;
    }
}

function appendToDisplay(input)
{
    display.value += input; 
}

function cleardisplay()
{
    display.value = "";
}