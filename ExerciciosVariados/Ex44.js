function descendingOrder(n){
    return n == 0 ? 0 :n.toString().split("").sort((a,b) => b - a).join("")
  }

  console.log(descendingOrder(15))