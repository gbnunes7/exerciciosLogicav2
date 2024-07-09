function solution(str, ending){
    let index = str.lastIndexOf(ending)
    console.log(index)
    return ending == str.substring(index)
  }

  console.log(solution('abcabc', 'bc'))