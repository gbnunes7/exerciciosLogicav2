// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

const prompt = require('readline-sync') 

let nome = prompt.question("Qual seu nome?");
let idade = Number(prompt.question("Qual sua idade?"));
let salario = Number(prompt.question("Qual seu salário?"));
let sexo = prompt.question("Qual seu sexo? (f/m)").toLowerCase();
let estadoCivil = prompt.question("Qual seu estado civil? (s/c/v/d)").toLowerCase();

function validarNome(nome) {
    return nome.length > 3
}

function validarIdade(idade) {
    return idade > 0 && idade < 150
}

function validarSalario(salario) {
    return salario > 0
}

function validarSexo(sexo) {
    return sexo === 'f' || sexo === 'm'
}

function validarEstadoCivil(estadoCivil) {
    return estadoCivil === 's' || estadoCivil === 'c' || estadoCivil === 'v' || estadoCivil === 'd'
}

function main(nome,idade,salario,sexo,estadoCivil) {
    while(!validarNome(nome)) {
        console.log("Nome inválido")
        nome = prompt.question("Qual seu nome?")
    }
    while(!validarIdade(idade)) {
        console.log("Idade inválida")
        idade = Number(prompt.question("Qual sua idade?"))
    }
    while(!validarSalario(salario)) {
        console.log("Salário inválido")
        salario = prompt.question("Qual seu salário?")
    }
    while(!validarSexo(sexo)) {
        console.log("Sexo inválido")
        sexo = prompt.question("Qual seu sexo?")
    }
    while(!validarEstadoCivil(estadoCivil)) {
        console.log("Estado civil inválido")
        estadoCivil = prompt.question("Qual seu estado civil?")
    }

    console.log("Tudo correto.")
}

main(nome,idade,salario,sexo,estadoCivil)