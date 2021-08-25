/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // time complexity - O(n)
    // space - O(n)
    let map = new Map();
    for(let num of nums){
        if(map.has(num)) return true;
        else map.set(num,1);
    }
    return false;
};