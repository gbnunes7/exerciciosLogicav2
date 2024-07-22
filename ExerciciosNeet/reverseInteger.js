var reverse = function(x) {
    x = x.toString().split("").reverse()
    if(x[x.length -1] === '-') {
        x.pop()
        x.unshift('-')
     }
    x = parseInt(x.join(''))
     return x <= 2147483647 && x >= -2147483648 ? x : 0;
};