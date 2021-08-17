/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    // Given a binary tree root, a node X in the tree is named good 
    //if in the path from root to X there are no nodes with a value greater than X.
    // Return the number of good nodes in the binary tree.
    // recursive dfs
    // time complexity - O(n)
    // space complexity -O(n)
    let goodNodes = 0;
    function dfs(node, maxSoFar) {
        if (maxSoFar <= node.val) {
            goodNodes++;
        }
        if (node.right != null) {
            dfs(node.right, Math.max(node.val, maxSoFar));
        }
        if (node.left != null) {
            dfs(node.left, Math.max(node.val, maxSoFar));
        }
    }
    dfs(root, Number.NEGATIVE_INFINITY, goodNodes);
    return goodNodes;
};