console.log('New Year Chaos!');

const minimumBribes = (q) => {
	let counter = 0;
	// Iterate through array starting from end
	for (let len = q.length, i = len - 1; i >= 0; i --) {
		// An integer cannot move more than two places
		// So if an integer minus its position in the array is 3 or greater
		// We know it bribed more than two people
		if (q[i] - (i + 1) >= 3) {
			return "Too chaotic";
		};
		// From one index before the ORIGINAL index of the current integer,
		// all the way to where it currently is, check if any integers are greater
		for (let j = Math.max(0, q[i] - 2); j < i; j ++ ) {
			if(q[j] > q[i]) {
				counter ++;
			}
		}

	};
};

console.log(minimumBribes([2, 1, 5, 3, 4]));