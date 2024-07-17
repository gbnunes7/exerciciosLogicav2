function findShort(s){
    s = s.split(' ')
    let menorString = s[0].length
    console.log(s[0].length)
    for(let i = 1; i < s.length ; i++) {
        if(menorString > s[i].length) {
            menorString = s[i].length
        }
    }
    return menorString
 
}

findShort("bitcoin take over the world maybe who knows perhaps")