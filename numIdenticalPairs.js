/**
 * @param {number[]} nums
 * @return {number}
 */
var assert = require('assert');
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i =0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
    }
    return count;
};

// nums is empty; 
assert(numIdenticalPairs([])==0);

// no identical pairs exist
assert(numIdenticalPairs([1,2,3])==0);

// all nums elements are equal
assert(numIdenticalPairs([1,1,1,1]) == 6);

// good flow
assert(numIdenticalPairs([1,2,3,1,1,3]) == 4);
