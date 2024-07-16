function duplicateCount(text){
    let count = 0
    let set = new Set()
    text = text.toLowerCase().split('').sort()
    for(let i = 0; i < text.length ; i++) {
        if(text[i] == text[i+1]) {
            set.add(text[i])
        }
    }
    return set.size
  }

  console.log(duplicateCount("Indivisibilities"))