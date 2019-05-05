const bruteProd = arr => {
    const others = {}
    for (let i = 0; i < arr.length; i++) {
        others[i] = arr.filter(item => item !== arr[i])
        others[i] = others[i].reduce((acc, cur) => acc * cur)
    }
    return Object.values(others)
}
// O(n^2)

const greedyProd = arr => {
    const prodAllOthers = []
    let curProd = 1
    for (let i = 0; i < arr.length; i++) {
        prodAllOthers[i] = curProd
        curProd *= arr[i]
    }
    curProd = 1
    for (let j = arr.length - 1; j >= 0; j--) {
        prodAllOthers[j] *= curProd
        curProd *= arr[j]
    }
    return prodAllOthers
}
// O(n)

const nums = [1, 7, 3, 4]
console.log(greedyProd(nums))