/**
 * Returns the max profit possible from buying a stock and selling it.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let minBuy = Infinity;
	let optimalProfit = 0;

	for (const price of prices) {
		minBuy = Math.min(minBuy, price);
		optimalProfit = Math.max(optimalProfit, price - minBuy);
	}

	return optimalProfit;
}

let testCases = [
	[[7, 1, 5, 3, 6, 4], 5],
	[[7, 6, 4, 3, 1], 0],
];

let error = false;
for (const [prices, want] of testCases) {
	if (maxProfit(prices) != want) {
		console.error(`got ${got} want ${want} case ${prices}`);
		error = true;
	}
}

if (!error) {
	console.log('tests passed!');
}
