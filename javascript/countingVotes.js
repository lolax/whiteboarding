const countVotes = votes => {
    let tally = {}
    let leader = null

    votes.forEach(vote => {
        if (!tally[vote]) {
            tally[vote] = 0
        }

        tally[vote] += 1
    
        if (leader === null) {
            leader = vote
        } else if (tally[vote] > tally[leader]) {
            leader = vote
        } else if (tally[vote] === tally[leader] && vote > leader) {
            leader = vote
        }
    })
    
    return leader
}

let ballotResults = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

console.log(countVotes(ballotResults))  // should return 'michael'