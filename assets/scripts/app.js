const defaultValue = 0;
let recentNumber = defaultValue;
let myArray = [];

function getEnterNumber() {
    return parseInt(userInput.value);
}

function objectFunction(number, operator, previous, result) {
    const referObject = {
        number: number,
        operator: operator,
        previous: previous,
        result: result,
    };
    myArray.push(referObject);
    console.log(myArray);
}

function readAndWrite(operator, beforeOutput, finalResult) {
    const resultDescription = `${beforeOutput} ${operator} ${finalResult}`;
    outputResult(recentNumber, resultDescription);
}

function logicalFunction(operator, op) {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    if (operator === 'ADD') {
        recentNumber = recentNumber + enterNumber;
    } else if (operator === 'SUB') {
        recentNumber = recentNumber - enterNumber;
    } else if (operator === 'MULTI') {
        recentNumber = recentNumber * enterNumber;
    } else {
        recentNumber = recentNumber / enterNumber;
    }
    readAndWrite(op, initNumber, enterNumber);
    objectFunction(enterNumber, operator, initNumber, recentNumber);
}

function add() {
    logicalFunction('ADD', '+');
}

function sub() {
    logicalFunction('SUB', '-');
}

function multi() {
    logicalFunction('MULTI', '*');
}

function divide() {
    logicalFunction('DIVIDE', '/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);