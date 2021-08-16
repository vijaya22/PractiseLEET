var assert = require('assert');
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
            row.forEach(columnValue=>{
                if(columnValue<0) {
                    count++;
                }
            })
        }
    })
    return count;
};

// empty array
assert(countNegatives([]) == 0);

// 0 negatives
assert(countNegatives([[1,2],[3,4]]) == 0);

// 1 D array
assert(countNegatives([1,2]) == 0)

//good flow
assert(countNegatives([[1,2],[3,-4]]) == 1);
