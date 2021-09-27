/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // time complexity - O(n)
    // space coplexity - O(n)
    let a = [];
    for(let i=0 ;i < nums.length; i++){
        a[(i+k)% nums.length] = nums[i];
    }
    for(let i=0; i<nums.length; i++){
        nums[i] = a[i];
    }
};
