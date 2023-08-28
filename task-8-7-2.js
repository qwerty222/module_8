const obj = {
    a: 2,
    b: 3,
    operator: "+"
}

const calculate = function (a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
    }
}

calculate.apply(obj, [2, 3, "+"]);