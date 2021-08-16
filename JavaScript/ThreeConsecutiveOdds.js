const assert = require("assert");

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    if(arr.length == 0 ) return 0;
    let count = 0;
    for(element of arr){
        if(element%2 != 0){
            count++;
        }
        else{
            count = 0;
        }
        if(count == 3) return true;
    }
    return false;
    
};

const x = threeConsecutiveOdds([1,2,3,5,7]);
console.log('x::::',x);

// blank array
assert(threeConsecutiveOdds([]) == false)

// good flow
assert(threeConsecutiveOdds([1,2,3,4,5,6,7,8,9,1,5]) == true)
