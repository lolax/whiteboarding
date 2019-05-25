const stringPermutations = str => {
    if (str.length <= 1) return  new Set([str])

    const charsExceptLast = str.slice(0, -1)
    const lastChar = str[str.length - 1]

    const permsExceptLast = stringPermutations(charsExceptLast)

    const perms = new Set()
    permsExceptLast.forEach(perm => {
        for (let i = 0; i <= charsExceptLast.length; i++) {
            const permutation = perm.slice(0, i) + lastChar + perm.slice(i)
            perms.add(permutation)
        }
    })
    return perms
}


console.log(stringPermutations("zipper"))