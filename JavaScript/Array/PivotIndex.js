/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // time compexity - O(n)
    // space complexity - O(n)
    let n = nums.length;
    let dpArr = new Array(n).fill(0);
    
    for(let i=1; i<=n; i++){
        dpArr[i] = dpArr[i-1]+ nums[i-1];
    }
    for(let i=0; i<=n; i++){
        if(dpArr[i] == (dpArr[n] - dpArr[i+1])){
            return i;
        }
    }
    return -1;
};
