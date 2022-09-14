class Calculator {
    constructor(previousOperandtextElement, currentOperandtextElement) {
        this.previousOperandtextElement = previousOperandtextElement
        this.currentOperandtextElement = currentOperandtextElement
    }

    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    appendNumber(number) {
        this.currentOperand = number
    }

    chooseOpertaion(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandtextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-equals]')
const previousOperandtextElement = document.querySelector('[data-previous-operand]')
const currentOperandtextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandtextElement, currentOperandtextElement)

numberButtons2.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

});