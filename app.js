let DEL = document.querySelector('#delete')
let current = document.querySelector('.current-operand')
let previous = document.querySelector('.previous-operand')
let number = document.querySelectorAll('.calculator-number')
let math = document.querySelectorAll('.calculator-calculate')
let equals = document.querySelector('#equals')
let clear  = document.querySelector('#clear')
// variables to hold the math
let enterNumber = ''
let equation = ''
// The result of the long hard battle to get the number on the button to go to current when you click on the button
// Making the current 
addDigit = function() {
    // send digit from the button html to current feild
    current.innerText = this.innerText
    // add the digit to the larger number you're creating
    enterNumber += this.innerText
    current.innerText = enterNumber
  } 
deleteDigit = function() {
    //if there is content, remove the last digit added to the bottom of the calculator(enterNumber)
    if (enterNumber.length !== 0) {
        enterNumber = enterNumber.slice(0, -1)  
    }
    current.innerText = enterNumber
}
addMath = function() {
    // add the math operator and send the larger number created by addDigit to 
    // the equation(previous) on the top of the calculator and clear the bottom
    equation += enterNumber
    equation += this.innerText
    previous.innerText = equation
    enterNumber = ''
}
doMath = function() {
    // add the last digit to the equation then evaluate the equation and display the result on the bottom 
    equation += enterNumber
    output = eval(equation)
    previous.innerText = equation
    current.innerText = output
    //make the buttons not clickable until you clear
    for (let index = 0; index < number.length; index++) {
        number[index].disabled = true
    }
    for (let index = 0; index < math.length; index++) {
        math[index].disabled = true
    }
    DEL.disabled = true
    equals.disabled = true
}

erase = function() {
    // clear the bottom(current) and the top (previous) of the calculator as well as the variables holding the math 
    previous.innerText = ''
    current.innerText = ''
    enterNumber = ''
    equation = ''
    //make the buttons clickable again
    for (let index = 0; index < number.length; index++) {
        number[index].disabled = false
    }
    for (let index = 0; index < math.length; index++) {
        math[index].disabled = false
    }
    DEL.disabled = false
    equals.disabled = false
}

// event listeners
for (let index = 0; index < number.length; index++) {
    number[index].addEventListener('click', addDigit)
}
for (let index = 0; index < math.length; index++) {
    math[index].addEventListener('click', addMath)   
}
equals.addEventListener('click', doMath)
clear.addEventListener('click', erase)
DEL.addEventListener('click', deleteDigit)



