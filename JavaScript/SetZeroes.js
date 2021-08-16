/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // time complexity- O(m*n)
    // space complexity - O(m+n)
    let zeroRow = new Set();
    let zeroCol = new Set()
    let rows = matrix.length;
    let columns = matrix[0].length;
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(matrix[i][j] == 0){
                zeroRow.add(i);
                zeroCol.add(j);
            }
        }
    }
    for(let i=0; i<rows; i++){
        for(let j = 0; j<columns; j++){
            if(zeroRow.has(i) || zeroCol.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
    
};
