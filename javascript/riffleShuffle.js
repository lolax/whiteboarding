const riffleDetector = (deck, half1, half2) => {
    return deck.every((card, i) => {
        return i % 2 === 0 ? card === half1[i / 2] : card === half2[(i - 1) / 2]
    })
}

const shuffledDeck = [ 3, 1, 4, 11, 12, 14,  5,  6,  8, 10, 19, 15 ]
const riffledDeck  = [ 1, 3, 4,  5,  6,  8, 10, 11, 12, 14, 15, 19 ]

const half1 = [ 1, 4, 6, 10, 12, 15 ]
const half2 = [ 3, 5, 8, 11, 14, 19 ]

console.log(riffleDetector(riffledDeck, half1, half2))