function smallEnough(a, limit) {
    return a.every((element) => element <= limit);
  }
console.log(smallEnough([66, 101], 200))