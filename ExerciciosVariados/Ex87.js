function findOdd(arr) {
    // Cria um objeto para contar as ocorrências de cada número
    const count = {};
  
    // Itera pelo array e conta as ocorrências de cada número
    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
    }
  
    // Itera pelo objeto para encontrar o número com contagem ímpar
    for (let num in count) {
      if (count[num] % 2 !== 0) {
        return parseInt(num);
      }
    }
  }

let teste = 'teste'