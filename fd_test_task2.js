'use strict'

function assess(f, data) {

	f.apply(null, data); 
	//f(...data);

}

module.exports = assess;