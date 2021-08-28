/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s){
    // sliding window
    // expand window if dont repeat

    let res = 0;
    let map = new Map();
    for(let i=0, j=0; i<s.length; i++){
        if(map.has(s[i])){
            i = Math.max(i, map.get(s[i]));
        }
        res = Math.max(res, i-j+1);
        map.set(s[i],i+1);
    }
    return res;

}