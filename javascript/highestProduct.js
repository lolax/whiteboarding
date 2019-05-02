const highestProduct = arr => {
    arr.sort((a, b) => a < b)
    return arr[0] * arr[1] * arr[2]
}
// very concise solution; 
// O(n log(n)) time complexity; 
// does not account for two large negative numbers making a large positive product

const greedyHighestProduct = arr => {
    highestProdOf3 = arr[0] * arr[1] * arr[2]
    highestProdOf2 = arr[0] * arr[1]
    lowestProdOf2  = arr[0] * arr[1]
    highest        = Math.max(arr[0], arr[1])
    lowest         = Math.min(arr[0], arr[1])

    for (let i = 3; i < arr.length; i++) {
        const current = arr[i]
        highestProdOf3 = Math.max(
            highestProdOf3,
            current * highestProdOf2,
            current * lowestProdOf2
        )

        highestProdOf2 = Math.max(
            highestProdOf2,
            current * highest,
            current * lowest
        )

        lowestProdOf2 = Math.min(
            lowestProdOf2,
            current * highest,
            current * lowest
        )

        highest = Math.max(highest, current)
        lowest = Math.min(lowest, current)
    }
    return highestProdOf3
}
// greedy solution;
// O(n) time complexity;
// accounts for viable negative factors

const arrayOfInts = [2304, 10, 24, 50, 691, -420]
console.log(highestProduct(arrayOfInts))