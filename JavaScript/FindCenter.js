/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    
    // find n by finding max edge 
    // make an array of all edge count of nodes
    // star node edge count == n-1

    let n = Number.NEGATIVE_INFINITY;
    edges.map(e=>{
        n = Math.max(e[0],e[1],n);
    })
   
    let edgeCount = new Array(n+1).fill(0);
    for(let edge of edges){
        edgeCount[edge[0]]++;
        edgeCount[edge[1]]++;
    }   
 
    for(let i =1;i<=n; i++){
        if(edgeCount[i] == n-1){
            return i;
        }
    }
    return -1;
};
