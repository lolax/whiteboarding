// First attempt is along the right track in terms of using the length/range constraints for index positioning.
// The issue is that by swapping, swapped integers end up in an earlier index and don't end up being placed correctly.
// The actual solution in this style treats the array like a linked list and handles to pointed to value rather than swapping
// It's O(n) time and O(1) space.

// const findDuplicates = arr => {
    // iterate over the arr
    // try to put each item in the index matching it
    // if the item currently at that index is the same as the index, then that's the duplicate
    // otherwise, swap it
    // arr.forEach((int, ind) => {
    //     if (int !== ind && arr[int] === int) {
    //         return int
    //     } else {
    //         let swap = arr[int] 
    //         arr[int] = int
    //         arr[ind] = swap  
    //     }
    // })
// }

const findDuplicates = arr => {
    let low = 1
    let high = arr.length - 1

    while (low < high) {
        const mid = Math.floor((low + ((high - low) / 2)))
        let lowerRangeMax = mid - low + 1
        let lowerRangeLength = 0
        arr.forEach(int => {
            if (int >= low && int <= mid) lowerRangeLength += 1
        })
        lowerRangeLength > lowerRangeMax ? high = mid : low = mid + 1
    }
    return low
}
 
const ints = [2, 3, 5, 6, 1, 8, 9, 5, 4, 7]
console.log(findDuplicates(ints))