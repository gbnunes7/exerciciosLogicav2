function persistence(num) {
     let contador = 0 
     num = num.toString().split("")
     while(num.length > 1) {
         if(num.length != 1) {
             num = num.reduce((accumulator,currentValue) => accumulator*currentValue)
             num = num.toString().split("")
             contador++ 
         }
     }
     return contador
 }
   
 