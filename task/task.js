function calculate(cb, a = Math.random(), b = Math.random(), options = {}) {
	if (options.disallowNegative) {
		if (a < 0 || b < 0) throw new Error('negative numbers are not allowed');
	}
	let result = cb(a, b);
	if (options.roundingType) {
		switch (options.roundingType) {
			case 'ceil':
				result = Math.ceil(result);
				break;
			case 'floor':
				result = Math.floor(result);
				break;
			case 'round':
				result = Math.round(result);
			// no default
		}
	}
	// if (options.roundingCb) result = options.roundingCb(result);
	return result;
}

console.log(
	calculate((a, b) => a + b, 1, 0, {
		roundingType: 'round',
		disallowNegative: true,
		// roundingCb: Math.ceil,
	}),
);

console.log(
	calculate((a, b) => a + b, undefined, undefined, {
		roundingType: 'ceil',
		disallowNegative: true,
		// roundingCb: Math.ceil,
	}),
);
