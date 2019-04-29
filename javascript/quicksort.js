const quickSort = nums => {
    if (nums.length <= 1) return nums
    let left = [], right = [], sorted = []
    let pivot = nums.splice(Math.floor(nums.length / 2), 1)
    nums.forEach(num => num <= pivot ? left.push(num) : right.push(num))
    return sorted.concat(quickSort(left), pivot, quickSort(right))
}
  
console.log(quickSort([3,4,5,1,2,7,-10]))