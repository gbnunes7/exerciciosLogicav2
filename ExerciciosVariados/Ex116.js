function incrementString(strng) {
    const regex = /(\d*)$/; // Captura a parte numérica no final da string
    const match = strng.match(regex); // Encontra a parte numérica

    let numPart = match[0]; // Parte numérica
    let nonNumPart = strng.slice(0, numPart.length); // Parte não numérica

    if (numPart === "") {
        return strng + "1";
    }

    // Incrementa a parte numérica
    const incrementedNumPart = (parseInt(numPart) + 1).toString().padStart(numPart.length, "0");

    // Concatena a parte não numérica com a parte numérica incrementada
    return nonNumPart + incrementedNumPart;
}

console.log(incrementString('foo'))