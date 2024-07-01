// criando classe stack e fazendo exercicio binário
class Stack {
    constructor(){
        this.items = []
    }

    add(element) {
        this.items.push(element)
    }

    remove() {
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }
}



function decimalToBinary(decNumber) {
    const stackBinary = new Stack() // instanciando minha classe stack
    let number = decNumber; // atribuindo meu numero decimal a um numero
    let rem; // inicialziando variavel de resto
    let binaryString = ''; // incializando variavel para string
    while(number > 0) { // lógica da conversão para binario
        rem = Math.floor(number % 2); // rem é igual ao resto da operação inicial
        stackBinary.add(rem); // push resto para a stack
        number = Math.floor(number / 2); // depois o numero é divido por 2 e repete a lógica
    }

    while (!stackBinary.isEmpty()) {
        binaryString += stackBinary.remove().toString() // a stack vai sendo removida e adicionada a binarystring pelo principio lifo
    }
    
    return binaryString
}

console.log(decimalToBinary(233))

















