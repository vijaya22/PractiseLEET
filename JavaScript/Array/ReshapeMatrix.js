/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(mat, r, c) {
    // time complexity - O(r*c)
    // space complexity - O(r*c)
    let R = mat.length;
    let C = mat[0].length;
    if (R * C != r * c) return mat;
    let rows = 0;
    let cols = 0;
    let resultant = Array.from(new Array(r), () => new Array(c))
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            resultant[i][j] = mat[rows][cols];
            cols++;
            if (cols == C) {
                rows++;
                cols = 0;
            }
        }
    }
    return resultant;
}