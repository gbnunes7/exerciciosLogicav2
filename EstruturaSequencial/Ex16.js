// Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00. Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
//comprar apenas latas de 18 litros;
//comprar apenas galões de 3,6 litros;
//misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

const prompt = require('readline-sync');

const squaredMeters = Number(prompt.question("Qual o tamanho em metros quadrados a ser pintado?")); // entrada de dados
const recipiente = Number(prompt.question("Qual deseja comprar? 1 - Lata, 2 - Galão, 3-Lata e Galão")) // entrada
const lata = { // objeto para lata
    valor: 80,
    litros: 18,
    get coberturaPerLata() { // uso de get para calcular a cobertura dinamicamente com o litro de uma lata
        return 6*this.litros;
    }
}
const galao = { // objeto para galão
    valor: 25,
    litros: 3.6,
    get coberturaPerGalao() { // uso de get para calcular a cobertura dinamicamente com o litro de uma lata
        return 6*this.litros
    }
}

const galaoELata = { // objeto para galao e lata misturados
    valor: lata.valor+galao.valor,
    litros: lata.litros + galao.litros,
    get coberturaPerLitroGalaoELata() {
        return 6*this.litros
    } 
}

const comprar = calcula(recipiente)
let valorAPagar

if (recipiente === 1) {
    valorAPagar = Number(comprar * lata.valor)
} else if (recipiente === 2) {
    valorAPagar = comprar *galao.valor
} else if (recipiente === 3) {
    valorAPagar = comprar *galaoELata.valor
}


function calcula(recipiente) {
    if(recipiente === 1) {
        return Math.ceil(squaredMeters / lata.coberturaPerLata)
    } else if (recipiente === 2) {
        return Math.ceil(squaredMeters / galao.coberturaPerGalao) 
    } else if (recipiente === 3){
        return Math.ceil(squaredMeters / galaoELata.coberturaPerLitroGalaoELata)
    } else {
        return undefined
    }
}

console.log(valorAPagar, comprar)

console.log(valorAPagar)