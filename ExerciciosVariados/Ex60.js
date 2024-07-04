//Given a string s, return true if it is a palindrome, otherwise return false.

function isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '');
        const sReverse = s.split('').reverse().join('')
        return s.toLowerCase()  == sReverse.toLowerCase() 
    }

    console.log(isPalindrome("Was it a car or a cat I saw?"))