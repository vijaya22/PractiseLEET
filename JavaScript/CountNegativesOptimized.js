/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    grid.forEach(row=>{
        // to check if the grid is 2D or not we can 
        // check type Of row
         if(typeof row == 'object'){
            let rowLength = row.length;
            while(rowLength>0){
                if(row[rowLength-1]<0){
                    count++;
                    rowLength--;
                }
                else{break;}
            }
        }
    })
    return count;
};
