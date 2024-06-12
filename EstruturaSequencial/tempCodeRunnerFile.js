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