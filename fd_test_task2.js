'use strict'

function assess(f, data) {
	let n, lnn, n2, n3;
	let t0 = perfomance.now();
	f.apply(null, data); 
	//f(...data);
	let t1 = perfomance.now();


	switch(t1-t0) {
		case n: 
			return "O(n)";
			break;
		case lnn: 
			return "O(log(n))";
			break;
		case n2:
			return "O(n2)";
			break;
		case n3: 
			return "O(n3)";
			break;
	}

}

module.exports = assess;