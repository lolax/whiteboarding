const recursiveMakingChange = (amount, denom, index=0, cache={}) => {
    
    const cacheKey = `${amount}-${index}`
    if (cache.hasOwnProperty(cacheKey)) return cache[cacheKey]
    if (amount === 0) return 1 
    if (amount < 0 || index === denom.length) return 0

    const currentCoin = denom[index]
    let ways = 0
    
    while (amount >= 0) {
        ways += recursiveMakingChange(amount, denom, index + 1, cache)
        amount -= currentCoin
    }

    cache[cacheKey] = ways
    return ways
}

// O(n ∗ m) time and O(n ∗ m) space
// where n = amount; m = denominations

const bottomUpMakingChange = (amount, denom) => {
    const ways = new Array(amount + 1).fill(0)
    ways[0] = 1

    denom.forEach(coin => {
        for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
            const remainder = higherAmount - coin
            ways[higherAmount] += ways[remainder]
        }
    })
    return ways[amount]
}

// O(n ∗ m) time and O(n) space
// where n = amount; m = denominations

console.log(recursiveMakingChange(5, [1, 5, 10, 25, 50]))
console.log(bottomUpMakingChange(5, [1, 5, 10, 25, 50]))
