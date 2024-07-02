// Given two binary strings a and b, return their sum as a binary string.

var addBinary = (a, b) => (BigInt('0b'+a)+BigInt('0b'+b)).toString(2) 

