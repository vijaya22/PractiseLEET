/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    //graph question
    //find incoming and out going 
    if(trust.length<n-1) {return -1};
    let indegrees = new Array(n+1).fill(0);
    let outdegrees = new Array(n+1).fill(0);
    
    for(let relation of trust){
        outdegrees[relation[0]]++;
        indegrees[relation[1]]++;
    }
    
    for(let i=1;i<=n;i++){
        if(indegrees[i]== n-1 && outdegrees[i]==0){
            return i
        }
    }
    return -1;
    
};
