// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

let numerosLadoALado = ""
for (let i = 1 ; i <= 20 ;i++) {
    numerosLadoALado += i + " "
}
console.log(numerosLadoALado)