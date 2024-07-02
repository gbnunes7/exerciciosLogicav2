// iven an array of integers nums, return the length of the longest consecutive sequence of elements.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
// You must write an algorithm that runs in O(n) time.


function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // Verifica se num é o início de uma sequência
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) { // Conta o comprimento da sequência
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak); // Atualiza o comprimento máximo
        }
    }

    return longestStreak;
}

console.log(longestConsecutive([2,20,4,10,3,4,5]))