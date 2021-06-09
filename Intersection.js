const assert = require("assert");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0 ) return [];
    let num1Set = new Set(nums1);
    let num2Set = new Set(nums2);
    let result = [];
    for(let num1 of num1Set){
        if(num2Set.has(num1)){
            result.push(num1);
        }
    }
    return result;
};

const x = intersection([],[]);
console.log('x:::: ',x);

// both are blank arrays
assert(JSON.stringify(intersection([],[])) == JSON.stringify([]))

// either one is blank
assert(JSON.stringify(intersection([],[2,1])) == JSON.stringify([]))
assert(JSON.stringify(intersection([2,1],[])) == JSON.stringify([]))

// good flow
assert(JSON.stringify(intersection([1,2,2,1],[2,2])) == JSON.stringify([2]))

