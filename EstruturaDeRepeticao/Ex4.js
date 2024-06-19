// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

// pais A = 80000 0.03 ano
// pais B = 200000 0.015 ano

let bMaiorQueA = true;
let anosNecessarios= 0

let paisA = 80000
let paisB = 200000

while (bMaiorQueA) {
    
    if (paisA > paisB) {
        bMaiorQueA = false
    } else {
    paisA += paisA * 0.03
    paisB += paisB * 0.015
    anosNecessarios++
    }
}
console.log(anosNecessarios)