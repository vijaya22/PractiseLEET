/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // brute force 
    // make all possible substring
    // check each one if it has repitive characters
    // time complexity - O(n3)
    // space complexity - O(min(n,m))
    if(!s.length) return 0;
    let n = s.length;
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            let st = s.substring(i,j+1);
            if(allUnique(st)){
                res = Math.max(res, st.length);
            }
        }
    }
    return res;
};
/**
 * 
 * @param {string} str
 * @return {boolean}
 */
function allUnique(str){
    let strArr = str.split('');
    for(let i=0; i<strArr.length; i++){
        if(strArr.indexOf(strArr[i]) != i) return false;
    }
    return true;
}