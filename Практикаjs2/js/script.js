const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExecise')

const number1 = document.querySelector('#inputNumb1')
const number3 = document.querySelector('#inputNumb3')
const result1 = document.querySelector('#resultSecondExecise')

const number2 = document.querySelector('#inputNumb2')
const result2 = document.querySelector('#resultThirdExecise')

const number4 = document.querySelector('#inputNumb4')
const result4 = document.querySelector('#resultFourthExecise')

function getNumb(arg1) {
    return arg1.toString()
}

number.addEventListener("input", () => {
    result.textContent=getAge(Number(getNumb(number.value)))
})

function getAge(arg) {
    return arg+1
}

function getRemainder(arg,arg1) {
    return arg%arg1
}

number1.addEventListener("input", () => {
    result1.textContent=getRemainder(Number(getNumb(number1.value)),Number(getNumb(number3.value)))
})

function getNextAge(arg) {
    if (arg == 0) {    
        return 0
    }
    else {
        return arg+1
    }
}

number2.addEventListener("input", () => {
    result2.textContent=getNextAge(Number(getNumb(number2.value)))
})

number4.addEventListener("input", () => {
    result4.textContent=canRide(Number(getNumb(number4.value)))
})

function canRide(arg) {
    return arg >= 140
}