function highAndLow(numbers){
    numbers = numbers.split(" ").map(Number)
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    console.log(numbers)
    return [max,min]
  }

  console.log(highAndLow("7 8 8 -9 5 9"))