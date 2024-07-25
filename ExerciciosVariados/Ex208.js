var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    const tmp = s.split("").reverse().join("").toLowerCase()
    console.log(s,tmp)
    return s === tmp
};

console.log(isPalindrome("race a car"))