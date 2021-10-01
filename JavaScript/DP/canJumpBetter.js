/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // time complexity - O(n^2)
    // space complexity - O(n)
    let memoize = new Array(nums.length).fill(-1);
    memoize[nums.length-1] = 1;
    return canJumpFrom(0, nums, memoize);
};
function canJumpFrom(pos, nums, memoize){
    if(memoize[pos] != -1){
        return memoize[pos] == 1 ? true : false;
    }
    
    let furthestJump = Math.min(pos + nums[pos], nums.length-1);
    for(let nextPos = pos+1; nextPos<= furthestJump; nextPos++){
        if(canJumpFrom(nextPos, nums, memoize)){ 
            memoize[pos] = 1;
            return true;}
    }
    memoize[pos] = 0;
    return false;
}
