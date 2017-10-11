'use strict';
// сложность линейная O(N)
module.exports = function (red, blue) {
	let curRedBottle  = 0,
		curBlueBottle = 0,
		arr = [];
		
	while(curBlueBottle < blue.length && curRedBottle < red.length) {
		let diff = red[curRedBottle] - blue[curBlueBottle];
		if (diff > 0) {
			red[curRedBottle] -=  blue[curBlueBottle];
			arr.push([curBlueBottle, curRedBottle, blue[curBlueBottle]]);			
			curBlueBottle++;
		} else if(diff < 0) {
			blue[curBlueBottle] -= red[curRedBottle];
			arr[curBlueBottle].push([curBlueBottle, curRedBottle, red[curRedBottle]]);
			curRedBottle++;
		} else {
			arr.push([curBlueBottle, curRedBottle, blue[curBlueBottle]]);
			curRedBottle++;
			curBlueBottle++;
		}
	
	}

	return arr;
}