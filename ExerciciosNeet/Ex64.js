function doubleChar(str) {
    let stringFinal = ""
  for (let i = 0; i < str.length ; i++) {
    stringFinal+= str[i].toString().repeat(2)
  }
  return stringFinal
}

// objetivo string = ssttrriinngg

console.log(doubleChar("1234!_"))