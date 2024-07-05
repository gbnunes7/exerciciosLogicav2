function isPangram(string){
    const set = new Set()
    const abc = "abcdefghijklmnopqrstuvxwyz"

    for(let char of string) {
        if(abc.includes(char)){
            set.add(char)
        }
    }

    for (let char of abc) {
        if(!set.has(char)){
            return false
        }
    }

    return true


  }

  console.log(isPangram("ola"))