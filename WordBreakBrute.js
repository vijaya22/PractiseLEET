/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // brute force
    // add all the dictionary words into a set as a set has o(1) search
    // time complexity - O(2n)
    // space complexity - O(n)
    if(!s.length || !wordDict.length) return false;
    let dictSet = new Set(wordDict);
    return wordBreakRecur(s, dictSet, 0);
    
};
function wordBreakRecur(s, dictSet, start){
    if(start == s.length) return true;
    for(let end = start+1; end<= s.length; end++){
        if(dictSet.has(s.substring(start,end)) && wordBreakRecur(s, dictSet, end)){
            return true;
        }
    }
    return false;
}
