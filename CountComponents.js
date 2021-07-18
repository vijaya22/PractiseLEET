/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    // use dfs to find connected components
    
    
    // create visited array 
    let visited = new Array(n).fill(false);
    // create graph
    let graph = buildGraph(n, edges);
    // create res
    let res = 0;   
    
    // traverse graph
    for (let i = 0; i < n; i ++) {
        // not visited
        if (visited[i] === false) {
            res ++;
            dfs(i, graph, visited);
        }
    }
    return res;
};

const buildGraph = (n, edges) => {
    let graph = Array.from({length: n}, () => []);
    
    for (let edge of edges) {
        let [src, dist] = edge;
        graph[src].push(dist);
        graph[dist].push(src);
    }
    console.log('graph::',graph)
    return graph
}

const dfs = (index, graph, visited) => {
    visited[index] = true;
    let nodes = graph[index];
    for (let i = 0; i < nodes.length; i ++) {
        if (visited[nodes[i]] === false) {
            dfs(nodes[i], graph, visited)
        }
    }
}
