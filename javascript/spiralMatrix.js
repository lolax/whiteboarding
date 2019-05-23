const createSpiral = matrix => {
    let spiral = []
    const loop = matrix => {
        spiral.push(...matrix.shift())
        matrix.map(row => spiral.push(row.pop()))
        spiral.push(...matrix.pop().reverse())
        for (let i = matrix.length - 1; i >= 0; i--) {
            spiral.push(matrix[i].shift())
        }
    }

    while (matrix.length) {
        loop(matrix)
    }
    
    return spiral
}

const matrix = [
    [1,   2,  3,  4],
    [5,   6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
]

console.log(createSpiral(matrix))