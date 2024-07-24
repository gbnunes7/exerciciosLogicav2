function mango(quantity, price) {
    // Calcula o número de mangos gratuitos
    const freeMangos = Math.floor(quantity / 3);
    // Calcula o número de mangos a serem pagos
    const paidMangos = quantity - freeMangos;
    // Calcula o custo total
    return paidMangos * price;
}

