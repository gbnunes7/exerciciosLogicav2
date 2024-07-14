function arithmetic(a, b, operator){
    if(a < 0 && b < 0 ) {
      return "Error"
    }
    let resultado = 0
    switch(operator) {
        case "add":
        resultado = a + b
        break
        
        case "subtract":
        resultado = a - b
        break
        
        case "multiply":
        resultado = a *b
        break
        
        case "divide":
        resultado = a/b
        break
    }
    
    return resultado
    
  }