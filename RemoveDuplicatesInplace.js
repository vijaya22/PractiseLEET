/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // two pointer approach
    // time complexity - O(n)
    // space complexity - O(1)
    if(!nums.length) return 0;
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] != nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1
};
