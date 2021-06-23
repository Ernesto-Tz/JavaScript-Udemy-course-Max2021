let currentResult = 0;
let logEntries = [];

// function add(num1, num2){
//     return num1 + num2;
// }
function getUserNumberInput(){    
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,num1,num2){
    const calcDescription = `${num1} ${operator} ${num2}`;
    outputResult(currentResult, calcDescription);
}

function add (){
    //1.1 store current numbers
    const initialResult = currentResult;
    const enteredNum = getUserNumberInput()
    //1.2 Make operation
    currentResult = currentResult + parseInt(enteredNum); //We can only use a + in front of the variable and it will parse it to Int
            //currentResult = currentResult + +enteredNum;
    //2. Update the UI
    createAndWriteOutput("+",initialResult,enteredNum)

    //******objects and arrays
    const logEntry = {
        operation : "ADD",
        prevResult : initialResult,
        number : enteredNum,
        restul : currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
}

function subtract(){
     //1.1 store current numbers
     const initialResult = currentResult;
     const enteredNum = getUserNumberInput()
     //1.2 Make operation
     currentResult = currentResult - parseInt(enteredNum);
     //2. Update the UI
     createAndWriteOutput("-",initialResult,enteredNum)
}
function multiply(){
         //1.1 store current numbers
         const initialResult = currentResult;
         const enteredNum = getUserNumberInput()
         //1.2 Make operation
         currentResult = currentResult * parseInt(enteredNum);
         //2. Update the UI
         createAndWriteOutput("*",initialResult,enteredNum)
}
function divide(){
         //1.1 store current numbers
         const initialResult = currentResult;
         const enteredNum = getUserNumberInput()
         //1.2 Make operation
         currentResult = currentResult / parseInt(enteredNum);
         //2. Update the UI
         createAndWriteOutput("/",initialResult,enteredNum)
}
//We only call the function without parameters because we can call the function only when the button is clicked not during the parse (at the begining of the document execution)
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);


