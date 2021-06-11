const assert = require("assert");

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    if(!candies.length) return [];
    let maxCandy = Math.max(...candies);
    let result = candies.map(candy=>{
       return candy+extraCandies > maxCandy ? true : false;
    })
    return result;
};

const x = kidsWithCandies([3,4,1,7,9,0,2],7);

//empty array
assert(JSON.stringify(kidsWithCandies([],5)) == JSON.stringify([]));

// extraCandies = 0
assert(JSON.stringify(kidsWithCandies([1,1,1,1,1],0)) == JSON.stringify([false,false,false,false,false]));

// good flow
assert(JSON.stringify(kidsWithCandies([4,2,1,1,2],1)) == JSON.stringify([true,false,false,false,false]))

