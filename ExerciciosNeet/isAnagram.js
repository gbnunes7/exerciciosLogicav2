// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

function isAnagram(s,t) {
     s = s.replace(/\s+/g, '');
     t = t.replace(/\s+/g, '');
    const sOrdenada = s.split("").sort().join("")
    const tOrdenada = t.split("").sort().join("")

    if (sOrdenada === tOrdenada) {
        return true
    } else {
        return false
    }

}

console.log(isAnagram("racecar","r   carace"))