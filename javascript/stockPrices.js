const getMaxProfit = prices => {
    if (prices.length === 2) return prices[1] - prices[0]
    if (prices.length < 2) return "There must be more than 1 price"
    const sorted = []
    prices.forEach((price, i) => sorted.push([price, i]))
    sorted.sort((a, b) => a[0] > b[0])
    let end = sorted.length - 1
    for (let i = 0; i < Math.floor(sorted.length / 2); i++) {
        if (sorted[i][1] < sorted[end - i][1]) {
            return sorted[end - i][0] - sorted[i][0]
        } 
    }
}

const greedyMaxProfit = prices => {
    if (prices.length < 2) return "There must be more than 1 price"
    let minPrice = prices[0]
    let maxProfit = prices[1] - prices[0]

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]
        const potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(maxProfit, potentialProfit)
        minPrice = Math.min(minPrice, currentPrice)
    }

    return maxProfit
}

const stockPrices = [10, 5, 2];
// console.log(getMaxProfit(stockPrices))
console.log(greedyMaxProfit(stockPrices))