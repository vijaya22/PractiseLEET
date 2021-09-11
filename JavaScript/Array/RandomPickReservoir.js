/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    // reservoir sampling
    // time complexity - O(n)
    // space complexity - O(1)
    let n = this.nums.length;
    let count = 0;
    let idx = 0;
    for(let i = 0; i<n; i++){
        if(this.nums[i] == target){
            count++;
            if(Math.floor(Math.random() * count) == 0){
                idx = i;
            }
        }
    }
    return idx;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
