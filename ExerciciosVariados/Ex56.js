function firstNonConsecutive (arr) {
    if (!arr || arr.length === 0) {
      return null
    }
    
    const n1 = arr[0]
    let nSequencial = 0
    
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return arr[i];
      }
    }
      return null
  }