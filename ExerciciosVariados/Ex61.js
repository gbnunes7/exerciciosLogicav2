// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

function productExceptSelf(nums) {
    let numsOutput = []
    let numsX = nums.reduce((accumulator,currentValue) => (accumulator * currentValue))
    for(let i = 0 ; i < nums.length ; i++) {
        let numsXX = numsX / nums[i]
        numsOutput.push(numsXX)
    }

    return numsOutput
}

console.log(productExceptSelf([-1,0,1,2,3]))