// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Example: "aba" output -> {a: 2 , b: 1}

    function countCharacters(str) {
        const charCount = {};
      
        // Iterar sobre cada caractere na string
        for (let char of str) {
          // Incrementar o contador para o caractere atual
          charCount[char] = (charCount[char] || 0) + 1;
        }
      
        return charCount;
      }
      


console.log(  countCharacters("cacac"))