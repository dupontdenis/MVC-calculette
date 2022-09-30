
console.log("/start")
import {qs, qsa, $delegate, $on} from './helpers.js                             ';



export default class View {
	/**
	 * @param {!Template} template A Template instance
	 */
	constructor() {
        this.numberButtons = qsa('[data-number]')
        this.operationButtons = qsa('[data-operation]')

        this.$calculatorGrid = qs('[data-grid-contener')
        this.equalsButton = qs('[data-equals]')
        this.deleteButton = qs('[data-delete]')
        this.allClearButton = qs('[data-all-clear]')
        this.previousOperandTextElement = qs('[data-previous-operand]')
        this.currentOperandTextElement = qs('[data-current-operand]')
        

	}





	/**
	 * @param {Function} handler Function called on synthetic event.
	 */
	bindAppendNumber(handler) {

        $delegate(this.$calculatorGrid, '[data-number]', 'click', ( {target} ) => {
			const number = target.dataset.number;
            console.log(number)
			if (number) {
				handler(number);
			}
		});
	}

    updateCurrentOperand (number) {
        // console.log(number)
        this.currentOperandTextElement.innerText = number;
    }



}