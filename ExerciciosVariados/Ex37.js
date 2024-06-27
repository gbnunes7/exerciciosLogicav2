// Escreva uma função que conte o número de caracteres únicos em uma string.

function countUniqueCharacters(str) {
    const set = new Set()

    for (let char of str) {
        set.add(char)
    }

    return set.size
}

console.log(countUniqueCharacters("aabbcc"))