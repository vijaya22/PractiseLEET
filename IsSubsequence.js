/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   // easiest approach would be two pointer approach
    // left pointer would refer to source string
    // right pointer would refer to target string
    // if source[left] == target[right] match found --> move both pointers forward
    // source[left] != target[right] no match, move only right pointer 
    // iteration would terminate when eitheor of the pointers exceed boundary
    
    let left = 0;
    let right = 0;
    
    while(left< s.length && right<t.length){
        if(s[left] == t[right]) {
            left++;
        }
        right++;
    }
    return left == s.length;
};
