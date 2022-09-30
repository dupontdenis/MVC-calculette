
export default class Model {

    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }


    appendNumber(number, callback) {

        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(this.currentOperand)
        if (callback) {
            callback(this.currentOperand);
        }
    }
}


