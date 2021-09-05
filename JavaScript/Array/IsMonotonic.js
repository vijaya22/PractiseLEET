/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    // two pass
    // time complexity - O(n)
    // space complexity - O(1)
    return checkIfIncreasing(nums) || checkIfDecreasing(nums); 
};
function checkIfIncreasing(nums){
    for(let i=0; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]) return false;
    }
    return true;
}
function checkIfDecreasing(nums){
    for(let i=0; i<nums.length-1; i++){
        if(nums[i]<nums[i+1]) return false;
    }
    return true;
}
