const assert = require("assert");

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    let commonPrefix = "";
    let firstString = strs[0];
    for(let i =0;i<firstString.length;i++){
       if( strs.every(string=>string[i] == firstString[i]) ){
           commonPrefix += firstString[i];
       }
       else return commonPrefix;
    }
    return commonPrefix;
   
};

const x = longestCommonPrefix(["flower","float","fly"]);
console.log("x:::" ,x);

// blank array
assert(longestCommonPrefix([])=="");

//single word
assert(longestCommonPrefix(["abc"])=="abc");

// common prefix
assert(longestCommonPrefix(["abc","dog","cat"])=="");

// good flow
assert(longestCommonPrefix(["float","floating","flower"])=="flo");
