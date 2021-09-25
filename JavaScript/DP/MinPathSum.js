/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // DP
    // time complexiy - O(mn)
    // space complexity - O(mn)
    let m = grid.length;
    let n = grid[0].length;
    
    let visited = new Array(m).fill(-1).map(()=> new Array(n).fill(-1));
   return calculateDistance(0, 0, grid, visited);
};

function calculateDistance(i, j, grid, visited){
    if(i >= grid.length || j >= grid[0].length) return Number.POSITIVE_INFINITY;
    if(visited[i][j] != -1) return visited[i][j];
    if(i== grid.length-1 && j == grid[0].length-1) return grid[i][j];
    let sum =  Math.min(calculateDistance(i+1,j, grid, visited), calculateDistance(i, j+1, grid, visited)) + grid[i][j];
    visited[i][j] = sum;
    return sum;
    
}