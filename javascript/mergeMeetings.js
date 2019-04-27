// Write a function mergeRanges() that takes an array of multiple meeting time ranges 
// and returns an array of condensed ranges. 



const mergeRanges = times => {
    let sorted = times.sort((a, b) => a.startTime > b.startTime)
    let merged = [sorted[0]]
    
    for (let i = 1; i < sorted.length; i++ ) {
        let cur = sorted[i]
        let lastMerged = merged[merged.length - 1]
        if (cur.startTime <= lastMerged.endTime) {
            lastMerged.endTime = Math.max(lastMerged.endTime, cur.endTime)
        } else {
            merged.push(cur)
        }
    }
    return merged
}

const timeRange = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 9,  endTime: 10 },
    { startTime: 10, endTime: 12 },
]


console.log(mergeRanges(timeRange));
// expected output
// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]
