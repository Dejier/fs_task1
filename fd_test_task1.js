//fd_test_task1.js
'use strict';
// x - подразумевается в процентах (10, 27..100)
module.exports = function (T, t, n, x) {
	let servers = 0;
	let expiredTime = t * n * x ;//общее время на конвертацию, разбавленное временем с учетом уменьшения вероятности ошибки до 1%
	return servers = Math.ceil(expiredTime / T); //кол-во серверов
};