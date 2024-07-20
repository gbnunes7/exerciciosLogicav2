var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a,b) => a - b)
    console.log(arr)
    const indiceMeio = Math.floor(arr.length/2) 
    console.log(indiceMeio)
    const result = (arr.length + 1)% 2 === 0 ? arr[indiceMeio] : (arr[indiceMeio] + arr[indiceMeio - 1]) /2
    return result
};

console.log(findMedianSortedArrays([1,3,4],[2]))