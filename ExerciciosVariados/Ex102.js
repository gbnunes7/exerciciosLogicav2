function chromosomeCheck(sperm) {
    sperm = sperm.toLowerCase().split("")
    return sperm[0] && sperm[1] == 'x'?"Congratulations! You're going to have a daughter.":"Congratulations! You're going to have a son."
  }

  console.log(chromosomeCheck('xx'))