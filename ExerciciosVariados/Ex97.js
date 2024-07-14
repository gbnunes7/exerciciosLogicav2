function solution(str, ending){
    let index = str.lastIndexOf(ending)
    return ending == str.substring(index)
  }