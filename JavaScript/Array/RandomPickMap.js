/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
   // this.nums = nums;
    this.indices = new Map();
    let len = nums.length;
    for(let i =0;i <len; i++){
        if(!this.indices.has(nums[i])){
            this.indices.set(nums[i], []);
        }
        this.indices.get(nums[i]).push(i);
    }

};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    // hashmap solution
    // time complexity - O(n)
    // space complexity - O(n)
    let len = this.indices.get(target).length;

    let index = this.indices.get(target)[Math.floor(Math.random() * len)];

    return index;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
