var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0 ; i < s.length ; i++) {
        const char = s[i]
        if(matchingBrackets[char]) {
            stack.push(char)
        } else {
            const topo = stack.pop()
            if (matchingBrackets[topo] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid("[][]{][["))