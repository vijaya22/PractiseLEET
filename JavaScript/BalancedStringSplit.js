const { assert } = require("console");
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    if(s == null || s.length == 0) return 0;
    let left = 0;
    let right = 0;
    let count  = 0;
    s.split('').forEach(char=>{
        if(char == 'L') left++;
        if(char == 'R') right++;
        if(left == right) count++;
    })
    if(left != right) return 0;
    return count;
};

let res = balancedStringSplit("RLRLRLRL");
console.log("res:::",res);

// null 
assert(balancedStringSplit(null)==0)

// length = 0 
assert(balancedStringSplit("")==0)

// if not a balanced string
assert(balancedStringSplit("RRLLL") == 0)

// good flow
assert(balancedStringSplit("RLRLRLRL")== 4)
