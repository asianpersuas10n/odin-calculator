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
        case add:
            return addF(num, num2);
        case subtract:
            return subtractF(num, num2);
        case multiply:
            return multiplyF(num, num2);
        case divide:
            return divideF(num, num2);
    };
};
