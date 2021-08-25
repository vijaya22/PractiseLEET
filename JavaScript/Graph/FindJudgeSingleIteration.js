/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    //graph question
    //find incoming - out going == n-1 // max  
    if(trust.length<n-1) {return -1};
    let trustArr = new Array(n+1).fill(0);
    
    for(let relation of trust){
        trustArr[relation[0]]--;
        trustArr[relation[1]]++;
    }
    
    for(let i=1;i<=n; i++){
        if(trustArr[i] == n-1){
            return i;
        }
    }
    return -1;
};
