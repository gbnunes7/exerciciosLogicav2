//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
    const arr = str.split("")
  
    for (let i = 0 ; i < arr.length ; i++) {
        if(arr[i] == '-' || arr[i] == '_') {
            arr[i+1] = arr[i+1].toUpperCase()
        }
    }
  
    str = arr.join("").replaceAll('-','').replaceAll('_','')
  
    return str
  }

  console.log(toCamelCase("gabriel-l__---jUHRR-Farw_indo"))