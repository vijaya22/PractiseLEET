/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // time complexity - O(2^n)
    // space complexity - O(n)
    return canJumpFrom(0, nums);
};
function canJumpFrom(pos, nums){
    if(pos == nums.length-1) return true;
    
    let furthestJump = Math.min(pos + nums[pos], nums.length-1);
    for(let nextPos = pos+1; nextPos<= furthestJump; nextPos++){
        if(canJumpFrom(nextPos, nums)) return true;
    }
    return false;
}
