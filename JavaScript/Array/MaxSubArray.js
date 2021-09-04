/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // optimized brute force
    // time complexity - O(n2)
    // space complexity - O(1)
    let maxSubArray = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<nums.length; i++){
        let currentSubArray = 0;
        for(let j=i; j<nums.length; j++){
            currentSubArray += nums[j];
            maxSubArray = Math.max(maxSubArray, currentSubArray);
        }
    }
    return maxSubArray;
};
