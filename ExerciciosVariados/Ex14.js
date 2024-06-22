// Jogo da adivinhação:
// Implemente um jogo simples onde o computador escolhe um número aleatório entre 1 e 100 e o jogador deve tentar adivinhar qual é o número. O programa deve fornecer dicas (maior, menor, ou correto) após cada tentativa.

const numeroAleatorio = 10 //parseInt(Math.random()*100)

let chute = 10


while(chute != numeroAleatorio) {
    if(chute < numeroAleatorio) {
        console.log("O número é maior")
        
    } else if (chute > numeroAleatorio) {
        console.log("O número é menor")
    } else {
        console.log("Acertou")
    }
}