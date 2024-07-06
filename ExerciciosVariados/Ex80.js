const binaryArrayToNumber = arr => {
    arr = arr.join("")
    let numero = (BigInt('0b'+arr)).toString().replace("n","")
    return Number(numero)
  };

  console.log(binaryArrayToNumber([0, 0, 0, 1]))