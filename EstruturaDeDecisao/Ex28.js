//  O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                      Até 5 Kg           Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

const prompt = require('readline-sync')

const tipoCarne = prompt.question("Qual tipo de carne? (Filé Duplo / Alcatra / Picanha").toLowerCase(); // entrada de dados
const qtdCarne = Number(prompt.question("Quantos KG de carne deseja comprar?")); // entrada de dados
const tipoPag = prompt.question("Qual a forma de pagamento? (cartao tabajara/dinheiro").toLowerCase(); // entrada de dados

function geraCupomFiscal() { // função para gerar cupom fiscal
    let precoPorKg; // inicialização de preço por kg
    
    switch (tipoCarne) { // reatribuição para kg 
        case "file duplo":
            precoPorKg = qtdCarne> 5 ? 5.80 : 4.90 // caso escolha file duplo por mais de 5kg ficaria 5.80 por menos 4.90
            break;
        case "alcatra":
            precoPorKg = qtdCarne> 5 ? 6.80 : 5.90 //caso escolha alcatra por mais de 5kg ficaria 6.80 por menos 5.90
            break
        case "picanha":
            precoPorKg = qtdCarne> 5 ? 7.80 : 6.90 //caso escolha picanha por mais de 5kg ficaria 7.80 por menos 6.90
            break
        default:
            console.log("Carne não encontrada.") // caso não tenha a carne
            return
    }

    const precoPerQtd =  (precoPorKg * qtdCarne).toFixed(2) // variável preço por kg dependendo da carne
    const recebeuDesconto = tipoPag === "cartao tabajara" ? true : false // variável recebe desconto ou não
    const descontoValor = recebeuDesconto == true ?  Number((precoPerQtd * 0.05).toFixed(2)) : "" // variavel do cálculo
    const stringRecebeu = recebeuDesconto == true? "recebeu desconto de:" : "não recebeu desconto" // variável para string
    const valorAPagar = Number((precoPerQtd - descontoValor).toFixed(2)) // variável valor total
    
    
    console.log (`Você comprou ${qtdCarne}Kg de ${tipoCarne}, com um valor total de: R$${precoPerQtd} a forma de pagamento foi ${tipoPag}, com isso ${stringRecebeu} ${descontoValor} e o valor a se pagar ficou de: R$${valorAPagar}. `)
}

geraCupomFiscal()

