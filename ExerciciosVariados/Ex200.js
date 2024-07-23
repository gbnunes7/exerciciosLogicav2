function solution(string) {
    let result = ""; 
    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        if (currentChar === currentChar.toUpperCase() && i !== 0) {
            result += " ";
        }
        result += currentChar;
    }
    return result;
}

  console.log(solution("olA"))