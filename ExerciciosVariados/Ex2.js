// Escreva uma função chamada isPalindrome que verifica se uma string fornecida é um palíndromo. Um palíndromo é uma palavra, frase ou sequência que se lê da mesma forma para frente e para trás (desconsiderando espaços e pontuações).

function isPalindrome(string) {
    const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString == cleanedString.split("").reverse().join("")
}
console.log(isPalindrome("A man a plan a canal Panama"))