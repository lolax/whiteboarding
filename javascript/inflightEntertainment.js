const movieMatch = (duration, movies) => {
    cache = {}
    return movies.some(movie => {
        cache[movie] = duration - movie
        if (cache[duration - movie] == movie) {
            return true
        }
    })
}

const flightLength = 120
const matchableMovies   = [20, 100, 60, 70, 80, 90]
const unmatchableMovies = [400, 2, 10, 200, 11, 23]

console.log(movieMatch(flightLength, matchableMovies))