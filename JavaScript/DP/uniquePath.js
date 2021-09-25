/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // using recursion but time limit exceeds as all nodes are traversal multiple times
    // time complexity - O(2 ^ (m+n))
    if(m == 1 || n == 1) return 1;
	return uniquePaths(m-1, n) + uniquePaths(m, n-1);
};
