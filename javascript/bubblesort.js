const bubbleSort = arr => {
    let done = false;
    while (!done) {
      done = true;
      for (i = 0; i < arr.length - 1; i ++) {
        if (arr[i] > arr[i+1]) {
          let temp = arr[i]
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          done = false;
        }
      }
    }
    return arr
  }
  
bubbleSort([2, 1, 3])