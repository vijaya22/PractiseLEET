/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // binary search
    // time complexity - O(log mn)
    // space complexity - O(1)
    let m = matrix.length;
    if(m == 0) return false;
    let n = matrix[0].length;
    let left = 0
    let right = m * n -1;
    
    while(left<= right){
        let pivot = Math.floor((left+right)/2);
        let pivotEle = matrix[Math.floor(pivot / n)][pivot % n];
        if(target == pivotEle) return true;
        else {
            if(target < pivotEle){
                right = pivot - 1;
            }
            else left = pivot + 1;
        }
    }
    return false;
};
