function pipeFix(numbers){
    const nLast = numbers[numbers.length -1]
    const nFirst = numbers[0]
    let n = [nFirst]
    for(let i = nFirst ; i < nLast ; i++) {
      n.push(numbers[0] += 1)  
    }
    return n 
  }


  pipeFix([-1,4])