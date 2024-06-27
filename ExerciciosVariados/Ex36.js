// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.


    for (var i = 0; i < 3; i++) {
      console.log((" ".repeat(3 - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(3 - i - 1)));
    }
