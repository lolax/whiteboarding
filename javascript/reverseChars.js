const reverseChars = arr => {
    for (let i = 0; i < arr.length / 2; i++) {
        if (i !== arr.length - i) {
            let temp = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = arr[i]
            arr[i] = temp
        }
    }
    return arr 
}

const charArr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(reverseChars(charArr))