function remove (string) {
    string = string.split("")
   if(string[string.length - 1] == "!"){
        string.pop()
   }    
   return string
}

console.log(remove("olá!"))