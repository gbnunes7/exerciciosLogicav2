function flattenAndSort(array) {
    if(array.length === 0) {
      return []
    }

    let arraySorted = []

    for(let i = 0 ; i < array.length ; i++) {
      for(let j = 0 ; j <array [i].length;j++) {
      arraySorted.push(array[i][j])
    }}

    return arraySorted.sort((a,b) => a - b)
    
  }

  console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))