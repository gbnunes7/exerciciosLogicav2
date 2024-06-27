// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function ordena (a,b) {
    return a - b
  }
  function solution(nums){
      return nums.sort(ordena)
  }



  const n = [23124,412,4,1,54,6,4]
  console.log(solution(n))