function duplicateEncode(word){
    const isDuplicate = ')'
    const isntDuplicate = '('
    let result = ""
    const lowerWord = word.toLowerCase()
    for(let i = 0; i < lowerWord.length; i++) {
        let count = 0;
        for(let j = 0; j < lowerWord.length; j++) {
            if(lowerWord[i] === lowerWord[j]) {
                count++;
            }
        }
        result += count > 1 ? isDuplicate : isntDuplicate;
    }
    return result
}

console.log(duplicateEncode("ggg"))