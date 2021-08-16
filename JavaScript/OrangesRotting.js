/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // think the grid as a graph
    // and the rotten orange would affect to its connected oranges
    // thus we can think it as of level by level traversal 
    // bfs is used for level order traversal
    
    let Rows = grid.length;
    let Cols = grid[0].length;
    let freshOranges = 0;
    let queue =[];
    for(let i=0; i<Rows; i++){
        for(let j = 0; j<Cols; j++){
            if(grid[i][j] == 2) {
                queue.push([i,j]);
            }
            else if(grid[i][j] == 1){
                freshOranges++;
            }
        }
        
    }
    
   queue.push([-1,-1]);
    
    let minutesElapsed =-1;
    let directions  = [[-1,0],[0,1],[1,0],[0,-1]];
    
    while(queue.length>0){
       
        let curr = queue.shift();
        let row = curr[0];
        let column = curr[1];
        
        if(row == -1){
            minutesElapsed++;
            if(queue.length) queue.push([-1,-1]);
        }
        else{
            for(let d of directions){
                let neighbourRow = row+d[0];
                let neighbourCol = column+d[1];
                if(neighbourRow >= 0 && neighbourRow < Rows && neighbourCol >=0 && neighbourCol <Cols){
                    if(grid[neighbourRow][neighbourCol] == 1){
                        grid[neighbourRow][neighbourCol] = 2;
                        freshOranges--;
                        queue.push([neighbourRow,neighbourCol]);
                    }
                }
            }
        }
    }
    
    return freshOranges == 0 ? minutesElapsed : -1;
};
