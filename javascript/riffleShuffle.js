// checks for perfectly alternating riffle
const riffleDetector = (deck, half1, half2) => {
    return deck.every((card, i) => {
        return i % 2 === 0 ? card === half1[i / 2] : card === half2[(i - 1) / 2]
    })
}

// checks for random riffle
const improvedRiffleDetector = (deck, half1, half2) => {
    let idx = 0
    while (half1.length > 0 || half2.length > 0 || idx < deck.length) {
        if (half1.length > 0 && deck[idx] === half1[0]) {
            half1.shift()
            idx++
        }
        if (half2.length > 0 && deck[idx] === half2[0]) {
            half2.shift()
            idx++
        } else {
            return false
        }
    }
    return true
}

const shuffledDeck = [ 3, 1, 4, 11, 12, 14,  5,  6,  8, 10, 19, 15 ]
const riffledDeck  = [ 1, 3, 4,  5,  6,  8, 10, 11, 12, 14, 15, 19 ]

const half1 = [ 1, 4, 6, 10, 12, 15 ]
const half2 = [ 3, 5, 8, 11, 14, 19 ]

console.log(improvedRiffleDetector(riffledDeck, half1, half2))