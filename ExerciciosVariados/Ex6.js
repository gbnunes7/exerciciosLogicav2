// Escreva uma função chamada areAnagrams que verifica se duas strings são anagramas. Duas strings são anagramas se contiverem os mesmos caracteres, na mesma quantidade, mas em ordem diferente.

function areAnagrams(string1,string2) {
    if(string1.length !== string2.length) {
        return false
    }
    const sortedString1 = string1.split("").sort().join("")
    const sortedString2 = string2.split("").sort().join("")

    return sortedString1 === sortedString2

}

console.log(areAnagrams("listen", "silent"))