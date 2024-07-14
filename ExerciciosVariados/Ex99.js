var number=function(array){
    let arrNovo = []
    for(let i = 1 ; i <= array.length ; i++) {
        arrNovo.push(`${i}: ${array[i-1]}`)
    }
    return arrNovo
  }

  console.log(number(["a", "b", "c"])) //["1: a", "2: b", "3: c"]