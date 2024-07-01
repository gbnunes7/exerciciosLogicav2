// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

function validateParentheses(s) {
    const stack = [] // inicialização de stack por array
    const bracketPair = { // objeto para definir os pares de caracteres
        '[':']',
        '{':'}',
        '(':')'
    }

    for(let char of s) {
        if(bracketPair[char]) { // verificando se meu char está nos pares do objeto
            stack.push(char) // se sim, da um push para minha stack
        } else {
            const pairBracket = stack.pop() // como não é uma chave desimpilhamos o ultimo 
            if(bracketPair[pairBracket] != char) { // fazemos um desempilhamento e comparamos
                return false
            }
        }
    }

    return stack.length === 0 // retorna true (caso todos sejam empilhados, desempilhados e a stack fique 0)

}

console.log(validateParentheses("[()]"))