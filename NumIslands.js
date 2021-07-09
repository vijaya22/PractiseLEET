/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let rows = grid.length;
    let columns = grid[0].length;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(grid[i][j] == "1"){
                count++;
                dfs(grid, i , j);
            }
        }
    }
    return count;
};
function dfs(grid, i, j){
    let ni = grid.length;
    let nj = grid[0].length;
    if(i< 0 || j<0 || i>=ni || j>=nj) return;
    if(grid[i][j] == "0") return;
    
    grid[i][j] = "0";
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
}
