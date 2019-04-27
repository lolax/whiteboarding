
const reverseWords = arr => {
    arr = arr.join('').split(' ')
    for (let i = 0; i < arr.length / 2; i++) {
        if (i !== arr.length - 1) {
            let temp = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = arr[i]
            arr[i] = temp
        }
    }
    return arr.join(' ')
}

const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

console.log(reverseWords(message))