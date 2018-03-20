'use strict';

var firstArray = [0, 23, 'test'];
var secondArray = ['foo', 'b4r'];

class App {
	constructor() {
		this.alertMessage = '';
		this.areYouReady = true;
	}
	
	initializeCalculations() {
		var superArray;

		if (this.areYouReady) {
			superArray = this.mergeArrays(firstArray, secondArray);
			this.removeNumberValues(superArray);
		} else {
			this.alertMessage = 'You are not ready. Get ready!';
		}
	}

	mergeArrays(firstArray, secondArray) {
		return firstArray.concat(secondArray);
	}

	removeNumberValues(arrayToFilter) {
		return arrayToFilter.filter(isNumber);
	}

}

function isNumber(value) {
	return isNaN(value);
}