const rotationPoint = dictionary => {
    let low = 0
    let high = dictionary.length - 1
    
    while (low < high) {
        let guess = Math.floor(low + (high - low) / 2)
        dictionary[guess] >= dictionary[0] ? low = guess : high = guess
        if (low + 1 === high) break
    } 
    return high
}

const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(rotationPoint(words))
