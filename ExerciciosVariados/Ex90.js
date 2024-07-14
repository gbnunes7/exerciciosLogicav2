function removeChar(str){
    str = str.split("")
     str.pop()
     str.shift()
     str = str.join("")
     return str
   
   };
   
// Ou


function removeChar(str){
    return str.slice(1, -1)
   };
   