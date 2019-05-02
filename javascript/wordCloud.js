const wordCloud = str => {
    str = str.split('').map(letter => letter.toLowerCase()).join('')
    let words = str.split(' ')
    let wordMap = new Map()
    words.forEach(word => {
        wordMap.has(word) ? wordMap.set(word, wordMap.get(word) + 1) : wordMap.set(word, 1)
    })
    return wordMap
}

const testString = "HI yes Hello yes yes hi"

wordCloud(testString)