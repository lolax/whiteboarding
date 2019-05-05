const getRandom = (floor, ceiling) => {
    return Math.round(floor + (Math.random() * (ceiling - floor)))
}

const inPlaceShuffle = deck => {
    let randomSpot, cardToSwap

    for (let i = 0; i < deck.length; i++) {
        randomSpot = getRandom(i, deck.length - 1)
        if (i !== randomSpot) {
            cardToSwap = deck[randomSpot]
            deck[randomSpot] = deck[i]
            deck[i] = cardToSwap
        }
    }
    return deck;
}

// Fisher-Yates shuffle (aka Knuth shuffle)

const deckOfCards = [4, 3, 5, 6, 7, 7, 2, 2, 4, 5, 2, 6, 2, 6, 4, 6, 7, 8, 8, 10]
console.log(inPlaceShuffle(deckOfCards))