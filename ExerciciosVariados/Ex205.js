function getCount(str) {
    let count = 0
    const vogawls = new Set(["a","e","i","o","u"])
    for(const letter of str) {
        if(vogawls.has(letter)){
            count++
        }
    }
    return count
  }

  console.log(getCount("abeiuabshyrmnsd"))