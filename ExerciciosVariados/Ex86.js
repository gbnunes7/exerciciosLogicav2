// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase().split("").sort().join("")
    console.log(test)
    original = original.toLowerCase().split("").sort().join("")
    console.log(original)


     return test === original
  };

  console.log(isAnagram("Buckethead", "DeathCubeK"))