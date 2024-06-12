// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

const prompt = require('readline-sync');

const tamanhoArquivoEmMb = Number(prompt.question("Qual tamanho do arquivo em MB?"));
const velocidadeEmMbps = Number(prompt.question("Qual velocidade da internet em Mpbs?"));

const tempoEstimadoSegundos = tamanhoArquivoEmMb / (velocidadeEmMbps/8)
const tempoEstimado = tempoEstimadoSegundos / 60

console.log(`Seu download terá tempo aproximado de: ${tempoEstimado.toFixed(2)} minuto(s).`)