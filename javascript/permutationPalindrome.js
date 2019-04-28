const permutationPalindrome = str => {
    const occurrences = {}
    let letters = str.split('')
    letters.forEach(l => !occurrences[l] ? occurrences[l] = 1 : occurrences[l] += 1)

    console.log(occurrences)

    let oddException = false
    return letters.every(letter => {
        if (occurrences[letter] % 2 !== 0) {
            if (oddException) {
                return false
            } else {
                oddException = true
                return true
            }
        } else {
            return true
        }
    })
}


const str1 = "civic" // true
const str2 = "ivicc" // true
const str3 = "civil" // false
const str4 = "livci" // false

console.log(permutationPalindrome(str1))