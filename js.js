// math functions
function addF(num, num2) {
    return num + num2;
};

function subtractF(num, num2) {
    return num - num2;
};

function multiplyF(num, num2) {
    return num * num2;
};

function divideF(num, num2) {
    return num / num2;
};

// decides what functions to use
function operate(operator, num, num2) {
    switch (operator) {
        case "add":
            return addF(num, num2);
        case "subtract":
            return subtractF(num, num2);
        case "multiply":
            return multiplyF(num, num2);
        case "divide":
            return divideF(num, num2);
    };
};

// equal function
function equals() {
    num = operate(operator, parseInt(num2), parseInt(num));
    display.textContent = num.toString();
};

// buttons

const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

// buttons into display
/* 
maybe a function
when a user clicks a button it pushes a string of the number to join the string on display
num can be main display string 
when clicking on an operator store num into num2 
need to store input two times in a string
need to store the operator
pass them into a operate function and return that to display 
*/


let num = "";
let num2 = "";
let operator = "";

one.addEventListener("click", function() {
    display.textContent = num += "1";
});
two.addEventListener("click", function() {
    display.textContent = num += "2";
});
three.addEventListener("click", function() {
    display.textContent = num += "3";
});
four.addEventListener("click", function() {
    display.textContent = num += "4";
});
five.addEventListener("click", function() {
    display.textContent = num += "5";
});
six.addEventListener("click", function() {
    display.textContent = num += "6";
});
seven.addEventListener("click", function() {
    display.textContent = num += "7";
});
eight.addEventListener("click", function() {
    display.textContent = num += "8";
});
nine.addEventListener("click", function() {
    display.textContent = num += "9";
});
zero.addEventListener("click", function() {
    display.textContent = num += "0";
});
add.addEventListener("click", function() {
    if (num2 != "") {
        equals();
    };
    if (num == "") {
        num += "0";
    };
    operator = "add";
    num2 = num;
    num = "";
});
subtract.addEventListener("click", function() {
    if (num2 != "") {
        equals();
    };
    if (num == "") {
        num += "0";
    };
    operator = "subtract";
    num2 = num;
    num = "";
});
multiply.addEventListener("click", function() {
    if (num2 != "") {
        equals();
    };
    if (num == "") {
        num += "0";
    };
    operator = "multiply";
    num2 = num;
    num = "";
});
divide.addEventListener("click", function() {
    if (num2 != "") {
        equals();
    };
    if (num == "") {
        num += "0";
    };
    operator = "divide";
    num2 = num;
    num = "";
});
equal.addEventListener("click", equals);
clear.addEventListener("click", function() {
    operator = "";
    num = "";
    num2 = "";
    display.textContent = "0";
});