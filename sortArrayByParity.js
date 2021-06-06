var assert = require('assert');
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
   if(!nums.length) return [];
    let sortedNums = [];
    nums.forEach(num=>{
       if(num%2 == 0){
           sortedNums.push(num);
       }
    })
    nums.forEach(num=>{
        if(num%2 !=0) sortedNums.push(num);
    })
    return sortedNums
    //return nums.filter(num => num%2 == 0).concat(nums.filter(num=>num%2 !=0 ))
};

//blank array
assert(JSON.stringify(sortArrayByParity([])) == JSON.stringify([]));

//good flow
assert(JSON.stringify(sortArrayByParity([1,2,3,4])) == JSON.stringify([2,4,1,3]))
