console.log('New Year Chaos!');

const minimumBribes = (q) => {

	for (let len = q.length, i = len - 1; i >= 0; i --) {

		if (q[i] - (i + 1) >= 3) {
			return "Too chaotic";
		};

	};
};

console.log(minimumBribes([2, 5, 1, 3, 4]));