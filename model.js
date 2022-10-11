
export default class Model {

    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }


    appendNumber(number, callback) {
        console.log(`Model: ${number} appended to currentOperand`);
        this.currentOperand = this.currentOperand.toString() + number.toString()

        if (callback) {
            console.log(`Model: CurrentOperand is updated with ${this.currentOperand}`);

            callback(this.currentOperand);
        }
    }
}


