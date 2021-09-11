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
    // brute force approach
    // time complexity - O(n)
    // space complexity - O(n)
    let indices = new Array();
    let n = this.nums.length;
    let count = 0;
    for(let i =0; i<n; i++){
        if(this.nums[i] == target){
          indices.push(i)
        }
    }
    let len = indices.length;
    let x= Math.floor(Math.random() * len);
    let randomIndex = indices[x];
    return randomIndex;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
