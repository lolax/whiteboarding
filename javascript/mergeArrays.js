const mergeArrays = (arr1, arr2) => {
    let merged = []
    while (arr1.length > 0 || arr2.length > 0) {
        arr1[0] <= arr2[0] ? merged.push(arr1.shift()) : merged.push(arr2.shift())
    }
    return merged
}


const firstArray = [3, 4, 6, 10, 11, 15];
const secondArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(firstArray, secondArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]