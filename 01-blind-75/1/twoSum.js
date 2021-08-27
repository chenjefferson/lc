/**
 * Takes array of numbers. Returns indices of two different numbers s.t. add up to target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	// have map num -> index to track index of seen nums
	let toIndex = {}

	// iterate through nums
	for (const [index, num] of nums.entries()) {
		// if pair in map, return indices of this num and pair
		if ((target - num) in toIndex) {
			return [toIndex[target - num], index];
		}
		// else, add to map
		toIndex[num] = index;
	}
	// end case: return [-1, -1]
	return [-1, -1];
}

var testCases = [
	[[2, 7, 11, 15], 9, [0, 1]],
	[[3, 2, 4], 6, [1, 2]],
	[[3, 3], 6, [0, 1]],
];

let error = false;
for (const [nums, target, want] of testCases) {
	let got = twoSum(nums, target);

	if (got[0] != want[0] || got[1] != want[1]) {
		console.error(`got ${got} want ${want} case ${nums} with target ${target}`);
		error = true;
	}
}

if (! error) {
	console.log('tests passed!');
}
