/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // use dynamic programming as row is created based on previous row;
    // time complexity - O(numRows * numRows)
    // space complexity - O(numRows * numRows)
    let triangle = [];
    triangle.push([1]);
    for(let rowNum =1; rowNum< numRows; rowNum++){
        let row = [];
        let prevRow = triangle[rowNum-1];
        row.push(1);
        for(let j=1; j< rowNum; j++){
            row.push(prevRow[j-1] + prevRow[j]);
        }
        row.push(1);
        
        triangle.push(row);
    }
    
    return triangle;
};
