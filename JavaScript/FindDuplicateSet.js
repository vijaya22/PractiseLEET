/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // insert all into a map
    // check if dupliacte encountered
    // time complexity - O(n)
    // space complexity - o(n)
    let map = new Set();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return nums[i];
        }
        else map.add(nums[i]);
    }
    return -1;
};
