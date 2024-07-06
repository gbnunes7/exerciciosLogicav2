function noBoringZeros(n) {
    n = n.toString().split("")
    while(n[n.length - 1] == 0) {
         n.pop();
    }
    return Number(n.join(""))
  }

  console.log(noBoringZeros(1050))