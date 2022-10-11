import View from './view.js';
import Model from './model.js';

export default class Controller {
	/**
	 * @param  {!Store} store A Store instance
	 * @param  {!View} view A View instance
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;


        view.bindAppendNumber(this.appendNumber.bind(this));
	}



	/**
	 * Append an number 
	 *
	 * @param {!string} title Title of the new item
	 */
	appendNumber(number) {
		console.log(`Control: ${number} must be added`);
		this.model.appendNumber(number, (currentOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand}`);
			this.view.updateCurrentOperand(currentOperand);
		});
	}

	

}
