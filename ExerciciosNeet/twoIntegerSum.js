// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition


function twoSum(nums, target) {
    const numsHash = {} // inicializa hash

    for(let i = 0; i < nums.length;i++) { // itera sobre todos os elementos do array
        const complemento = target - nums[i] // declara o quanto falta para satisfazer o target

        if (complemento in numsHash) { // verificação para caso o complemento já esteja no hash
            return [numsHash[complemento],i] // caso o complemento já esteja na hash, retorna o indice do complemento, e do elemento iterado no momento
        }

        numsHash[nums[i]] = i // caso não esteja, adiciona o elemento "nums[i]" e seu index "i" e faz a função recursiva
    }
}

console.log(twoSum([2,5,5,11],7))
