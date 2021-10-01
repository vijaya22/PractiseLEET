/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // time complexity - O(n^2)
    // space complexity - O(n)
    let memoize = new Array(nums.length).fill(-1);
    memoize[nums.length-1] = 1;
    for(let i=nums.length -2; i>=0; i--){
        let furthestJump = Math.min(i+nums[i], nums.length-1);
        for(let j=i+1; j<= furthestJump; j++){
            if(memoize[j] == 1){
                memoize[i] = 1;
                break;
            }
        }
    }
    return memoize[0] == 1;
};
