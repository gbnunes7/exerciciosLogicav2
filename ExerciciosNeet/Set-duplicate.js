// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

function contemDuplicados(nums) {
    const vistos = new Set(); // incializando conjunto
    for (const numero of nums) { // iterando cada numero de nums
        if (vistos.has(numero)) { // se no conjunto já tem o número 
            return true; 
        }
        vistos.add(numero); // adicionando numero de nums no conjunto
    }
    return false; // se não contem retorna false
}

//Acertei
