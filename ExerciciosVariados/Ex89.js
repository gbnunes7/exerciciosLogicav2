function order(words){
    words = words.split(" ")
    return words.sort((a,b) =>{
        const numA = a.match(/\d/)[0];
        const numB = b.match(/\d/)[0];
        return numA-numB
    }).join(" ")
    
  }

  console.log(order("is2 Thi1s T4est 3a"))