/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let visited = new Array(m+1).fill(-1).map(() => new Array(n+1).fill(-1));
	return traversal(m,n, visited);
}
function traversal(i, j, visited){
	if(i == 1 || j == 1) return 1;
	if(visited[i][j] != -1) return visited[i][j];

	let ans =  traversal(i-1, j, visited) + traversal(i, j-1, visited);
    visited[i][j] = ans;
    return ans;
}
