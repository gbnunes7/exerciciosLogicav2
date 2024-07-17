function largestPairSum (numbers) {
    numbers = numbers.sort((a,b) => a - b)
    let soma = numbers[numbers.length -1] + numbers[numbers.length -2]
    return soma
  }