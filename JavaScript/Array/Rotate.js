/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
 	let toRotate = [];
    for(let i=k+1;i<n;i++){
  	    toRotate.push(nums[i]);
    }

    let result = toRotate.concat(nums);
    return result.slice(0,n);
};
