function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split("")
    return "Position of alphabet: " + (alphabet.indexOf(letter)+1)
  }
  console.log(position('j'))