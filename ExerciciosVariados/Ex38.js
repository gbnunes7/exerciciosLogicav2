// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
    let a = haystack.indexOf(needle)
    return a
}



// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

console.log(
    strStr ("sadbutsad", "sad"))