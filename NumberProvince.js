/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // find no of provinces
    // A province is a group of directly or indirectly connected cities
    //and no other cities outside of the group.
    
    // In this approach , we have used BFS to do level order traversal of graph
    // to find direct connected nodes first
    // time complexity - O(n2)
    // space complexity - O(n)
   
    let visited = new Array(isConnected.length).fill(0);
    let count = 0;
    let queue = [];
    for(let i=0; i<isConnected.length; i++){
        if(visited[i] == 0) {
            queue.push(i);
            while(queue.length){
                let s = queue.shift();
                visited[s] = 1;
                for(let j = 0; j< isConnected.length; j++){
                    if(isConnected[s][j] == 1 && visited[j] == 0){
                        queue.push(j);
                    }
                }
            }
            count++;
        }
    }
    return count;
};

