/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let wordSet = new Set();
    for(let i=0;i<wordDict.length;i++){
        wordSet.add(wordDict[i]);
    }
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for(let i = 1;i<=s.length; i++){
        for(let j=0; j<i; j++) {
            if(dp[j] && wordSet.has(s.substring(j,i))){
                dp[i] = true;
                break;
            }
            
        }
    }
    return dp[s.length];
};
