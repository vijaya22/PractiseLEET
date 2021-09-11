/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    // recursion 
    // time complexity - O(2^n * n)
    // space complexity - O(2^n * n)
   let res =[];
   letterCasePermut(s, 0, "", res);
   return res;
};
function letterCasePermut(s, i, plate, res){
    if(i == s.length){
        res.push(plate);
        return;
    }
    if(s[i]>=0 && s[i]<=9){
        letterCasePermut(s, i+1, plate+s[i], res);
    }
    else{
        letterCasePermut(s, i+1, plate+s[i].toLowerCase(), res);
        letterCasePermut(s, i+1, plate+s[i].toUpperCase(), res);
    }
}
