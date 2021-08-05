/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // time complexity - O(n)
    // space complexity - O(1)
    
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]> nums[i+1]) return i;
    }
    return nums.length-1;
};
