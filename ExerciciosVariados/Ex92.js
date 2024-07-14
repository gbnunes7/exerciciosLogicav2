function wave(str){
    let result = []
      
    if(str.length === 0) {
      return []
    }
    
      
    for(let i = 0; i < str.length ;i++) {
      if (str[i] === ' ') {
          continue; }
      
      
      let valorIndex = str[i]
      let stringModified = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(stringModified)
    }
    
    return result
  }