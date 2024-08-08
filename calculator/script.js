const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const dot = document.querySelector('.dot');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
let isOperatorClicked = false;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (!isOperatorClicked) {
            getFirstValue(atr);
        } else {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el) {
    result.innerHTML = "";
    if (firstValue === "0") {
        firstValue = el;
    } else {
        firstValue += el;
    }
    result.innerHTML = firstValue;
}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        if (secondValue === "0") {
            secondValue = el;
        } else {
            secondValue += el;
        }
        result.innerHTML = secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isOperatorClicked = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    let firstNum = parseFloat(firstValue);
    let secondNum = parseFloat(secondValue);
    if (sign === "+") {
        resultValue = firstNum + secondNum;
    } else if (sign === "-") {
        resultValue = firstNum - secondNum;
    } else if (sign === "x") {
        resultValue = firstNum * secondNum;
    } else if (sign === "/") {
        resultValue = firstNum / secondNum;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue.toString();
    secondValue = "";
    checkResultLength();
});

function checkResultLength() {
    let numResultValue = parseFloat(resultValue);
    if (numResultValue.toString().length >= 8) {
        result.innerHTML = numResultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
});

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
});

clear.addEventListener('click', () => {
    result.innerHTML = "0";
    firstValue = "";
    secondValue = "";
    sign = "";
    isOperatorClicked = false;
    resultValue = 0;
});

dot.addEventListener('click', () => {
    if (!isOperatorClicked && typeof firstValue === 'string' && !firstValue.includes('.')) {
        firstValue += '.';
        result.innerHTML = firstValue;
    } else if (isOperatorClicked && typeof secondValue === 'string' && !secondValue.includes('.')) {
        secondValue += '.';
        result.innerHTML = secondValue;
    }
});