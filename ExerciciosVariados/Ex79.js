function addLength(str) {
    str = str.split(" ")
    let arr = []
    for(let i = 0; i < str.length ; i++) {
        arr.push(str[i] + " " + str[i].length)
    }
    return arr
  }
  

  console.log(addLength("Ola Gabriel Melo"))