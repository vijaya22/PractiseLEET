/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // time complexity - O(n)
    // space complexity - O(min(n,k))
    let set = new Set();
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
        if(set.size > k){
            set.delete(nums[i-k]);
        }     
    }
    return false;
};