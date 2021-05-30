var assert = require('assert');
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let resultArr = [];
    nums.forEach(num=>{
        let count = 0;
        nums.forEach(indexNum=>{
            if(indexNum<num){
                count++;
            }
        })
        resultArr.push(count);
    })
    return resultArr;
};
//Test cases
//empty array
assert(JSON.stringify(smallerNumbersThanCurrent([])) == JSON.stringify([]));
//all numbers are equal
assert(JSON.stringify(smallerNumbersThanCurrent([7,7,7,7])) == JSON.stringify([0,0,0,0]));
//array with random numbers
assert(JSON.stringify(smallerNumbersThanCurrent([3,1,4,5])) == JSON.stringify([1,0,2,3]));
