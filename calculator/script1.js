const allNumbers = document.querySelectorAll('.number')
const symbols = document.querySelectorAll('.symbol')
const cButton = document.querySelector('.c')
const ceButton = document.querySelector('.ce')
const equalButton = document.querySelector('.equal')

const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const display3 = document.querySelector('.display-3')

let sign = ''
let output1 = ''
let output2 = ''
let dot = false
let sym = false

allNumbers.forEach(number =>  {
    number.addEventListener('click', showNumber)
})

function showNumber(e) {
    if(e.target.innerText === '.' && !dot) {
        dot =true
    }
    else if (e.target.innerText === '.' && dot){
        return
    }
    output2  = output2 + e.target.innerText
    display2.innerText = output2
}

symbols.forEach(symbol => {
    symbol.addEventListener('click', showResult)
})

function showResult(e){
    if(!output2)result
    dot = false

    const signName = e.target.innerText


     if (!output2 && sign) {
        output1 = output1.slice(0, -2) + signName + ' ';
        display1.innerText = output1;
        sign = signName;
        return;
    }

    if(output1 && output2 && sign) {
        calculation()
    }
    else {
        result = parseFloat(output2)
    }
    clearDisplay(signName)
    sign = signName
}

function calculation(){
    if(sign === 'x'){
        result = parseFloat(result) * parseFloat(output2)
    }
    else if (sign === '+'){
        result = parseFloat(result) + parseFloat(output2)
    }
    else if (sign === '-'){
        result = parseFloat(result) - parseFloat(output2)
    }
    else if (sign === '/'){
        result = parseFloat(result) / parseFloat(output2)
    }else if (sign === '%'){
        result = parseFloat(result) % parseFloat(output2)
    }

}
function clearDisplay(name = ' '){
    output1 += output2 + ' ' +name + ' '
    display1.innerText = output1
    display2.innerText = ''
    display3.innerText = result
    output2 = ''

}
equalButton.addEventListener('click',calculate)

function calculate(){
    if(!output1 || !output2)
        return
    else{
        calculation()
        clearDisplay()
        display2.innerText = result
        output2 = result
        display3.innerText = ''
        output1 = ''
    }
}
cButton.addEventListener('click', cButtons)
function cButtons(){
    display1.innerText = '0'
    display2.innerText = '0'
    display3.innerText = '0'
    output1 = ''
    output2 = ''
}

ceButton.addEventListener('click',ceButtons)

function ceButtons() {
    output2 = output2.slice(0,-1)
    display2.innerText = output2 || '0'
}