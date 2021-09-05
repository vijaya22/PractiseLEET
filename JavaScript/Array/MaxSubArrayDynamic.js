/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Dynamic Programming
    // time complexity - O(n)
    // space compelxity - O(1);
    let currentSubArray = nums[0];
    let maxSubArray = nums[0];
    for(let i =1; i<nums.length; i++){
        let num = nums[i];
        currentSubArray = Math.max(num, currentSubArray+num);
        maxSubArray = Math.max(maxSubArray, currentSubArray);
    }
    return maxSubArray;
};
