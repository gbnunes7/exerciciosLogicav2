//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

const prompt = require('readline-sync');

const squaredMeters = Number(prompt.question("Qual o tamanho em metros quadrados a ser pintado?")); // entrada de dados
const lata = { // objeto para lata
    valor: 80,
    litros: 18,
    get coberturaPerLata() { // uso de get para calcular a cobertura dinamicamente com o litro de uma lata
        return 3*this.litros;
    }
}
const latasAComprar = calcula();
const valorPago = latasAComprar *lata.valor

function calcula() {
    return Math.ceil(squaredMeters / lata.coberturaPerLata)
}


console.log(`Você precisará de ${latasAComprar} latas, e pagará um valor de R$${valorPago}.`)