function longest(s1, s2) {
    let arr = s1.concat(s2)
    let set = new Set(arr)
    arr = Array.from(set).sort().join('')
    console.log(arr)
  }

  longest("aretheyhere", "yestheyarehere")