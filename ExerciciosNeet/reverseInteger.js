var reverse = function(x) {
    x = x.toString().split("").reverse()
    if(x[x.length -1] === '-') {
        x.pop()
        x.unshift('-')
     }
    x = x.join('')
    return parseInt(x)
};

console.log(reverse(-123))