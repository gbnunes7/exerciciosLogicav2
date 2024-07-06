function betterThanAverage(classPoints, yourPoints) {
    const alunos = classPoints.length
    classPoints = parseInt(classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,0)) / alunos
    return yourPoints >= classPoints
  }
  
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))