const sortScores = (scores, ceiling) => {
    let occurrences = new Array(ceiling).fill(0)
    scores.forEach(score => occurrences[score] += 1)
    let sortedScores = []
    occurrences.forEach((occ, i) => {
        for (let j = 0; j < occ; j++) {
            sortedScores.push(i)
        }
    })
    return sortedScores
}

const leaderboard = [55, 20, 60, 70, 20, 32, 100, 30, 55]
