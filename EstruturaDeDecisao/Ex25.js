// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

const prompt = require('readline-sync');

const perguntas = ["Telefonou para a vítima?","Esteve no local do crime?","Mora perto da vítima?","Devia para a vítima?","Já trabalhou com a vítima?"]
let respostaPositiva = 0;

function classifica() {
    for ( let i = 0; i < perguntas.length ; i++) {
        if(prompt.question(perguntas[i]) === "sim".toLowerCase()) {
            respostaPositiva++
        }
    }

    if(respostaPositiva === 1 || respostaPositiva === 2) {
        return "Suspeita"
    } else if (respostaPositiva === 3 || respostaPositiva === 4) {
        return "Cúmplice"
    } else if (respostaPositiva >= 5) {
        return "Assassino"
    } else {
        return "Inocente"
    }
}
  
console.log(classifica())