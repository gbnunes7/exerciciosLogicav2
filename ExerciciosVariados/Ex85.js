function twoSort(s) {
    s = s.sort()
    let n = s[0]
    n = n.split("")
    // n[1] = n[1] + "***"
    for (let i = 0 ; i < n.length -1 ; i++) {
        n[i] = n[i] +"***" 
    }
    return n.join("")
  }

  twoSort([ "take", "over", "the", "world", "maybe", "who", "bitcoin", "knows", "perhaps"])