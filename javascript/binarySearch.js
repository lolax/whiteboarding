const binarySearch = (target, nums) => {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we don't mean "the last index")
  let low = -1;
  let high = nums.length;

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (low + 1 < high) {

    // Find the index ~halfway between the floor and ceiling
    // We have to round down to avoid getting a "half index"
    const distance = high - low;
    const mid = Math.floor(distance / 2);
    const guessIndex = low + mid;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {

      // Target is to the left, so move high to the left
      high = guessIndex;
    } else {

      // Target is to the right, so move low to the right
      low = guessIndex;
    }
  }

  return false;
}